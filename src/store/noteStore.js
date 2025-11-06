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
}));

export default useNoteStore;
