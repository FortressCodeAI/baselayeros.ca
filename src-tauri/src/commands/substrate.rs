// src-tauri/src/commands/substrate.rs

use serde_json::Value;
use baselayeros_verification::{
    adapters::governance_input::GovernanceInput,
    execution::execution_adapter::ExecutionAdapter,
    substrate::state::SubstrateState,
    substrate::context::ExecutionContext,
    authority::gate::SealFormat,
};

use super::governance::get_active_governance_pack_cmd;

#[tauri::command]
pub fn run_substrate_cmd(vector: Value) -> SubstrateState {
    // Determine active pack (default to AI Governance if none set)
    let active_id = get_active_governance_pack_cmd().unwrap_or_else(|| "ai_governance".to_string());

    let ctx = ExecutionContext::new("schemas", "governance_packs", &active_id)
        .expect("Failed to build execution context");

    let seal = vector
        .get("seal")
        .and_then(|v| v.as_str())
        .expect("Missing seal");

    let input = GovernanceInput { raw: vector.clone() };

    ExecutionAdapter::execute(
        &input,
        &ctx,
        seal,
        SealFormat::HmacV2 { key: b"test-hmac-key".to_vec() },
    )
}
