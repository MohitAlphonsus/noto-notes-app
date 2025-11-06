import { create } from "zustand";
import axiosClient from "../api/axiosClient";

const useNoteStore = create(set => ({
	notes: [],
	loading: false,

	getNotesByGroup: async groupId => {
		set({ loading: true });
		try {
			const response = await axiosClient.get(`/notes/group/${groupId}`);
			set({ notes: response.data.data, loading: false });
		} catch (err) {
			console.log(err);
			set({ loading: false });
		}
	},

	clearNotes: () => set({ notes: [], activeGroup: null }),

	createNote: async (groupId, title, content) => {
		try {
			const response = await axiosClient.post(`/notes/group/${groupId}`, {
				title,
				content,
			});
			set(state => ({
				notes: [...(state.notes || []), response.data.data],
			}));
		} catch (err) {
			console.log(err);
		}
	},

	updateNote: async (noteId, title, content) => {
		try {
			const response = await axiosClient.put(`/notes/${noteId}`, {
				title,
				content,
			});
			const updateNote = response.data.data;
			set(state => ({
				notes: state.notes.map(note =>
					note._id === noteId ? updateNote : note
				),
			}));
		} catch (err) {
			console.log(err);
		}
	},

	deleteNote: async noteId => {
		try {
			await axiosClient.delete(`/notes/${noteId}`);
			set(state => ({
				notes: state.notes.filter(note => note._id !== noteId),
			}));
		} catch (err) {
			console.log(err);
		}
	},
}));

export default useNoteStore;
