import Category from './categoryModel.js';

export async function createCategory(data) {
  try {
    const model = new Category(data);
    return await model.save();
  } catch (error) {
    throw error;
  }
}

export async function getAllCategory() {
  try {
    const model = new Category();
    return await model.find({});
  } catch (error) {
    throw error;
  }
}

export async function getCategoryById(id) {
  try {
    const model = new Category();
    const result = await model.findById(id);
    if (!result) throw new Error('result not found');
    return result;
  } catch (error) {
    throw error;
  }
}

export async function updateCategory(id, updateData) {
  try {
    const model = new Category();
    const result = await model.findByIdAndUpdate(id, updateData, { new: true });
    if (!result) throw new Error('Movie not found for update');
    return result;
  } catch (error) {
    throw error;
  }
}

export async function deleteCategory(id) {
  try {
    const model = new Category();
    const result = await model.findByIdAndDelete(id);
    if (!result) throw new Error('result not found for deletion');
    return result;
  } catch (error) {
    throw error;
  }
}
