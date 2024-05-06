import User from "./useModel";


// Obter todos os usuários
export async function getAllUsers() {
  try {
    return await User.find({});
  } catch (error) {
    throw error;
  }
}

// Obter um usuário pelo ID
export async function getUserById(userId) {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error("Usuário não encontrado");
    }
    return user;
  } catch (error) {
    throw error;
  }
}

// Atualizar um usuário pelo ID
export async function updateUser(userId, updateData) {
  try {
    const user = await User.findByIdAndUpdate(userId, updateData, {
      new: true,
    });
    if (!user) {
      throw new Error("Usuário não encontrado para atualizar");
    }
    return user;
  } catch (error) {
    throw error;
  }
}

// Deletar um usuário pelo ID
export async function deleteUser(userId) {
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throw new Error("Usuário não encontrado para deletar");
    }
    return user;
  } catch (error) {
    throw error;
  }
}
