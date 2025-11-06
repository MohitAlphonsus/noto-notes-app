import axiosClient from "../api/axiosClient";
import useNoteStore from "./noteStore";
import { create } from "zustand";

const useNoteGroupStore = create(set => ({
	noteGroups: [],
	loading: false,

	getNoteGroups: async () => {
		set({ loading: true });
		try {
			const response = await axiosClient.get("/notegroups");
			set({ noteGroups: response.data.data, loading: false });
		} catch (err) {
			console.log(err);
			set({ loading: false });
		}
	},

	createNoteGroup: async name => {
		try {
			const response = await axiosClient.post("/notegroups", { name });
			const newGroup = response.data.data || response.data;
			set(state => ({
				noteGroups: [...(state.noteGroups || []), newGroup],
			}));
		} catch (err) {
			console.log(err);
		}
	},

	deleteNoteGroup: async id => {
		try {
			await axiosClient.delete(`/notegroups/${id}`);
			set(state => ({
				noteGroups: state.noteGroups.filter(noteGroup => noteGroup._id !== id),
			}));

			const { clearNotes } = useNoteStore.getState();
			const savedGroupId = localStorage.getItem("activeGroup");
			if (savedGroupId === id) {
				localStorage.removeItem("activeGroup");
				clearNotes();
			}
		} catch (err) {
			console.log(err);
		}
	},
}));

export default useNoteGroupStore;
