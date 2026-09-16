use serde::{Serialize, Deserialize};
use std::fs;

#[tauri::command]
pub fn list_vectors_cmd() -> Vec<String> {
    let mut out = Vec::new();
    let entries = fs::read_dir("vectors").expect("vectors folder missing");

    for entry in entries {
        let path = entry.unwrap().path();
        if path.extension().map(|e| e == "json").unwrap_or(false) {
            out.push(path.to_string_lossy().to_string());
        }
    }

    out
}

#[tauri::command]
pub fn load_vector_cmd(path: String) -> Value {
    let raw = fs::read_to_string(&path)
        .unwrap_or_else(|e| panic!("Failed to read {path}: {e}"));
    serde_json::from_str(&raw)
        .unwrap_or_else(|e| panic!("Failed to parse {path}: {e}"))
}