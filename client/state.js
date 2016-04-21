export default function(LocalState) {

	// Login State
	// -> String
	LocalState.set("LOGIN_ERROR", null);

	// Regster State
	// -> String
	LocalState.set("REGISTER_ERROR", null);

	// CSV Urls State
	// -> Array
	LocalState.set("CSV_URLS", []);

	// Upload State
	// -> String
	LocalState.set("UPLOAD_STATE", null);
	// -> String
	LocalState.set("UPLOAD_ERROR", null);

	// Confirm Data State
	// -> String
	LocalState.set("CONFIRM_DATA_STATE", 0);
}