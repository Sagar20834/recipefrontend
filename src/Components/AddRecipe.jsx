import React, { useContext, useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { FaCamera, FaTrash } from "react-icons/fa6";
import saveRecipeData from "./RecipeData";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "./Context/AuthContext/AuthContext";
const AddRecipe = () => {
  const { token } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const checklogin = () => {
    if (!token) {
      toast.error("You need to be logged in to add a recipe.");
      setLoggedIn(false);
    } else {
      setLoggedIn(true);
    }
  };

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const {
    fields: ingredientFields,
    append: appendIngredient,
    remove: removeIngredient,
  } = useFieldArray({
    control,
    name: "ingredients",
  });

  const {
    fields: instructionFields,
    append: appendInstruction,
    remove: removeInstruction,
  } = useFieldArray({
    control,
    name: "instructions",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
        setValue("image", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSetCover = () => {
    setCoverImage(image);
  };

  const handleRemoveImage = () => {
    setImage(null);
    setCoverImage(null);
    setValue("image", null);
  };

  const handleStepImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const updatedInstructions = instructionFields.map((instruction, i) =>
          i === index ? { ...instruction, image: reader.result } : instruction
        );
        setValue("instructions", updatedInstructions);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    console.log("data submitted", data);
    saveRecipeData(data);
    toast.success("Recipe added successfully");

    setImage(null);
    setCoverImage(null);

    setValue(
      "instructions",
      instructionFields.map((field) => ({ ...field, image: null }))
    );

    setTimeout(() => reset(), 0);
  };

  return (
    <>
      {token ? (
        <>
          <ToastContainer />
          <div className="flex justify-between border-y-[1px] items-center min-h-24">
            <h1 className="text-4xl font-semibold ml-24">Create New Recipe</h1>
            <button
              className="bg-[#B66053] min-w-32 rounded-lg text-white hover:scale-110 min-h-9 my-4 mr-24"
              onClick={handleSubmit(onSubmit)}
            >
              Save
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col max-w-[520px] m-auto">
              <label htmlFor="title" className="text-2xl font-medium m-2">
                Recipe Title:
              </label>
              <input
                className="p-2 border-violet-500 border-[1px] rounded-md"
                type="text"
                {...register("title", {
                  required: "Title is required",
                  maxLength: {
                    value: 50,
                    message: "Title should not exceed 50 characters",
                  },
                  minLength: {
                    value: 5,
                    message: "Title should be at least 5 characters long",
                  },
                })}
                aria-invalid={errors.title ? "true" : "false"}
                placeholder="Enter the Title"
              />
              {errors.title && (
                <p role="alert" className="text-red-500">
                  ** {errors.title.message}
                </p>
              )}
            </div>

            <div className="flex flex-col max-w-[520px] m-auto">
              <label htmlFor="file-input" className="text-2xl font-medium m-2">
                Recipe Image:
              </label>

              <div className="flex flex-col items-center">
                <div className="relative min-w-[520px] h-64 border-2 border-dashed border-gray-300 flex justify-center items-center mb-4">
                  {image ? (
                    <div className="relative w-full h-full">
                      <img
                        src={image}
                        alt="Preview"
                        className="object-cover w-full h-full"
                      />
                      <div className="absolute top-2 left-2 flex flex-col gap-2">
                        <div className="flex gap-2 text-[#B66053]">
                          <button
                            type="button"
                            onClick={handleSetCover}
                            className="bg-white border-[1px] border-[#B66053] p-1 rounded-lg px-3 py-1 text-sm"
                          >
                            Set as cover
                          </button>
                          <label
                            htmlFor="file-input"
                            className="bg-white border-[1px] border-[#B66053] p-1 rounded-lg px-3 py-1 text-sm cursor-pointer"
                          >
                            Change image
                          </label>
                        </div>

                        <FaTrash
                          className="-bottom-52 flex absolute border-[1px] border-[#B66053] p-1 rounded-lg text-[#B66053] cursor-pointer bg-white"
                          size={30}
                          onClick={handleRemoveImage}
                        />
                      </div>
                    </div>
                  ) : (
                    <label
                      htmlFor="file-input"
                      className="flex flex-col items-center cursor-pointer text-gray-400"
                    >
                      <FaCamera
                        size={200}
                        height={400}
                        className="text-[#B66053]"
                      />
                      <span className="flex justify-center text-2xl">
                        Add Photo
                      </span>
                    </label>
                  )}

                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  {errors.image && (
                    <p role="alert" className="text-red-500">
                      ** {errors.image.message}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-3 ml-0">
                  {coverImage && (
                    <div className="flex relative flex-col items-center">
                      <img
                        src={coverImage}
                        alt="Cover Preview"
                        className="w-24 h-24 object-cover border-4 border-[#B66053] rounded-lg"
                      />

                      <span className="bg-[#B66053] absolute top-0 left-0 px-2 rounded-md text-xs text-white">
                        Cover
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex flex-col max-w-[520px] m-auto">
              <label htmlFor="description" className="text-2xl font-medium m-2">
                Description:
              </label>
              <textarea
                className="p-2 border-violet-500 border-[1px] rounded-md"
                type="text"
                {...register("description", {
                  required: "description is required",
                  maxLength: {
                    value: 500,
                    message: "description should not exceed 50 characters",
                  },
                  minLength: {
                    value: 5,
                    message: "description should be at least 5 characters long",
                  },
                })}
                aria-invalid={errors.description ? "true" : "false"}
                placeholder="Enter the description"
              />
              {errors.description && (
                <p role="alert" className="text-red-500">
                  ** {errors.description.message}
                </p>
              )}
            </div>

            <div className="flex flex-col max-w-[520px] m-auto mt-4">
              <label htmlFor="ingredients" className="text-2xl font-medium m-2">
                Ingredients:
              </label>
              {ingredientFields.map((item, index) => (
                <div key={item.id} className="flex items-center mb-2">
                  <input
                    className="p-2 border-violet-500 border-[1px] rounded-md flex-grow"
                    placeholder="Add ingredients"
                    {...register(`ingredients.${index}.name`, {
                      required: true,
                    })}
                  />
                  <button
                    type="button"
                    className="ml-2 text-[#B66053]"
                    onClick={() => removeIngredient(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                className="text-[#B66053] flex justify-start items-start"
                onClick={() => appendIngredient({ name: "" })}
              >
                + Header
              </button>
            </div>

            <div className="flex flex-col max-w-[520px] m-auto mt-4">
              <label
                htmlFor="instructions"
                className="text-2xl font-medium m-2"
              >
                Instructions:
              </label>
              {instructionFields.map((item, index) => (
                <div key={item.id} className="flex flex-col mb-4">
                  <div className="flex items-center">
                    <label
                      htmlFor={`instructions.${index}.image`}
                      className="mr-2"
                    >
                      <FaCamera className="text-[#B66053]" />
                    </label>
                    <input
                      type="file"
                      id={`instructions.${index}.image`}
                      accept="image/*"
                      onChange={(e) => handleStepImageChange(e, index)}
                      className="hidden "
                    />
                    <input
                      className="p-2 border-violet-500 border-[1px] rounded-md flex-grow"
                      placeholder={`Step ${index + 1}`}
                      {...register(`instructions.${index}.text`, {
                        required: true,
                      })}
                    />
                    <button
                      type="button"
                      className="ml-2 text-[#B66053]"
                      onClick={() => removeInstruction(index)}
                    >
                      Remove
                    </button>
                  </div>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={`Step ${index + 1}`}
                      className="mt-2 w-full h-48 object-cover rounded-md"
                    />
                  )}
                </div>
              ))}
              <button
                type="button"
                className="text-[#B66053] flex justify-start items-start"
                onClick={() => appendInstruction({ text: "", image: "" })}
              >
                + Header
              </button>
            </div>

            <div className="flex flex-col max-w-[520px] m-auto">
              <label htmlFor="servings" className="text-2xl font-medium m-2">
                Servings:
              </label>
              <input
                className="p-2 border-violet-500 border-[1px] rounded-md"
                type="number"
                {...register("servings", {
                  required: "Servings is required",
                })}
                aria-invalid={errors.servings ? "true" : "false"}
                placeholder="No. of servings"
              />
              <span className="text-gray-300 text-sm m-2">
                How many portions does the recipe make ?{" "}
              </span>
              {errors.servings && (
                <p role="alert" className="text-red-500">
                  ** {errors.servings.message}
                </p>
              )}
            </div>

            <div className="flex flex-col max-w-[520px] m-auto">
              <label htmlFor="Cookingtime" className="text-2xl font-medium m-2">
                Cooking Time:
              </label>
              <div className=" flex justify-between  w-full gap-4 ">
                {" "}
                <input
                  className="p-2 border-violet-500 border-[1px] rounded-md w-1/2"
                  type="number"
                  {...register("cookinghour", {
                    required: "Cookinghour is required",
                  })}
                  aria-invalid={errors.cookinghour ? "true" : "false"}
                  placeholder="Hours 0"
                />
                <input
                  className="p-2 border-violet-500 border-[1px] rounded-md w-1/2  "
                  type="number"
                  {...register("cookingminute", {
                    required: "Cookingminute is required",
                  })}
                  aria-invalid={errors.cookingminute ? "true" : "false"}
                  placeholder="Minutes 0"
                />
              </div>
              <span className="text-gray-300 text-sm m-2">
                How long does it takes to cook this recepies ?{" "}
              </span>
              {errors.cookinghour && (
                <p role="alert" className="text-red-500">
                  ** {errors.cookinghour.message}
                </p>
              )}
              {errors.cookingminute && (
                <p role="alert" className="text-red-500">
                  ** {errors.cookingminute.message}
                </p>
              )}
            </div>

            <div className="flex flex-col max-w-[520px] m-auto">
              <label htmlFor="preptime" className="text-2xl font-medium m-2">
                Prep Time:
              </label>
              <div className=" flex justify-between  w-full gap-4 ">
                {" "}
                <input
                  className="p-2 border-violet-500 border-[1px] rounded-md w-1/2"
                  type="number"
                  {...register("prephour", {
                    required: "Prephour is required",
                  })}
                  aria-invalid={errors.prephour ? "true" : "false"}
                  placeholder="Hours 0"
                />
                <input
                  className="p-2 border-violet-500 border-[1px] rounded-md w-1/2  "
                  type="number"
                  {...register("prepminute", {
                    required: "Prepminute is required",
                  })}
                  aria-invalid={errors.prepminute ? "true" : "false"}
                  placeholder="Minutes 0"
                />
              </div>
              <span className="text-gray-300 text-sm m-2">
                How long does it takes to Prepare this recepies ?{" "}
              </span>
              {errors.prephour && (
                <p role="alert" className="text-red-500">
                  ** {errors.prephour.message}
                </p>
              )}
              {errors.prepminute && (
                <p role="alert" className="text-red-500">
                  ** {errors.prepminute.message}
                </p>
              )}
            </div>

            <div className="flex flex-col max-w-[520px] m-auto">
              <label htmlFor="Cuisine" className="text-2xl font-medium m-2">
                Cuisine:
              </label>
              <div className=" flex justify-between  w-full gap-4  mb-6">
                {" "}
                <select
                  {...register("cuisine", {
                    required: "Please select a Cuisine",
                  })}
                  className="p-2 border-violet-500 border-[1px] rounded-md w-1/2"
                >
                  <option value="" hidden>
                    Select Cuisine
                  </option>
                  <option value="Indian">Indian</option>
                  <option value="Nepali">Nepali</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Italian">Italian</option>
                </select>
              </div>

              {errors.cuisine && (
                <p role="alert" className="text-red-500">
                  ** {errors.cuisine.message}
                </p>
              )}
            </div>

            <div className="flex flex-col max-w-[520px] m-auto">
              <label htmlFor="collection" className="text-2xl font-medium m-2">
                Collection:
              </label>
              <div className=" flex justify-between  w-full gap-4 mb-6">
                {" "}
                <select
                  {...register("collection", {
                    required: "Please select a collection",
                  })}
                  className="p-2 border-violet-500 border-[1px] rounded-md w-1/2"
                >
                  <option value="" hidden>
                    Select Collection
                  </option>
                  <option value="collection1">1 collection Selected</option>
                  <option value="collection2">2 collection Selected</option>
                  <option value="collection3">3 collection Selected</option>
                  <option value="collection4">4 collection Selected</option>
                </select>
              </div>

              {errors.collection && (
                <p role="alert" className="text-red-500">
                  ** {errors.collection.message}
                </p>
              )}
            </div>

            <button
              className="bg-[#B66053] min-w-32 rounded-lg text-white hover:scale-110 min-h-9 flex justify-center items-center m-auto"
              onClick={handleSubmit(onSubmit)}
            >
              Save
            </button>
          </form>
        </>
      ) : (
        <div className=" text-4xl m-auto flex items-center justify-center flex-col">
          <div className="m-3">Oops !! </div>
          <h1 className="m-3 ">Please Login to Proceed</h1>
        </div>
      )}
    </>
  );
};

export default AddRecipe;
