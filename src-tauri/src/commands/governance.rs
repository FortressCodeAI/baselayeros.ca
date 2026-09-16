use baselayeros_verification::governance::registry::GovernanceRegistry;
use baselayeros_verification::governance::pack::GovernancePack;

static mut ACTIVE_PACK_ID: Option<String> = None;

#[tauri::command]
pub fn list_governance_packs_cmd() -> Vec<GovernancePack> {
    let registry = GovernanceRegistry::load_from("governance_packs")
        .expect("Failed to load governance packs");
    registry.packs
}

#[tauri::command]
pub fn set_active_governance_pack_cmd(id: String) -> bool {
    unsafe {
        ACTIVE_PACK_ID = Some(id);
    }
    true
}

#[tauri::command]
pub fn get_active_governance_pack_cmd() -> Option<String> {
    unsafe { ACTIVE_PACK_ID.clone() }
}
