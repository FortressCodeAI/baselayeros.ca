#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod commands;

use commands::{
    cage::run_cage_parity_cmd,
    vectors::{list_vectors_cmd, load_vector_cmd},
    substrate::run_substrate_cmd,
    governance::{
        list_governance_packs_cmd,
        set_active_governance_pack_cmd,
        get_active_governance_pack_cmd,
    },
};

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            run_cage_parity_cmd,
            list_vectors_cmd,
            load_vector_cmd,
            run_substrate_cmd,
            list_governance_packs_cmd,
            set_active_governance_pack_cmd,
            get_active_governance_pack_cmd
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
