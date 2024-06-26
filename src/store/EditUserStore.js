import { create } from 'zustand';
import axios from 'axios';
import owasp from 'owasp-password-strength-test';

const API_URL = import.meta.env.VITE_API_URL;

export const useEditUserStore = create((set,get) => ({
  userId: '',
  username: '',
  email: '',
  password: '',
  roles: [],
  allRoles: [],
  goodPassword: true,
  errorMessage: '',

  loadUserData: async (userId) => {
    try {
      const response = await axios.get(`${API_URL}/users/${userId}/role/edit`);
      const userData = response.data.response;
      set({
        userId,
        username: userData.username,
        email: userData.email,
        roles: userData.roles,
        allRoles: userData.allRoles
      });
    } catch (error) {
      console.error('Error al cargar los datos del usuario:', error);
    }
  },

  handleChange: (field, event) => {
    const value = event.target.value;
    set((state) => ({ ...state, [field]: value }));

    if (field === 'password') {
      const result = owasp.test(value);
      set((state) => ({ 
        
        goodPassword: result.strong,
        errorMessage: result.errors.join(' ')
      }));
      console.log(result.strong);
    }
    console.log(get().errorMessage);
    console.log(get().goodPassword);
  },

  handleSubmit: async (userId, username, password, event) => {
    event.preventDefault();
    try {
      const userData = {
        username,
        secret: password 
      };
  
      await axios.put(`${API_URL}/users/${userId}/update`, userData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log('Usuario actualizado con éxito');
      console.log('Datos del usuario actualizado:', userData);
    } catch (error) {
      console.error('Error al actualizar el usuario:', error);
    }
  },
  

  DeleteRole: async (userId, roleId) => {
    try {
      await axios.put(`${API_URL}/roles/users/${userId}/role/${roleId}/delete`, {}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log('Rol eliminado del usuario con éxito');
    } catch (error) {
      console.error('Error al eliminar rol del usuario:', error);
    }
  },
  
  

  addRoleToUser: async (userId, roleId) => {
    try {
      await axios.put(`${API_URL}/roles/users/${userId}/role/${roleId}/add`, {}, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log('Rol añadido al usuario con éxito');
    } catch (error) {
      console.error('Error al añadir rol al usuario:', error);
    }
  }
  
}));
