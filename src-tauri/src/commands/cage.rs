use baselayeros_verification::cage::parity_harness::{
    CageCase, CageExpectedVerdict, CageParityReport, run_cage_parity,
};

#[tauri::command]
pub fn run_cage_parity_cmd() -> CageParityReport {
    let cases = vec![
        CageCase {
            name: "commit_path".into(),
            vector_path: "vectors/commit_path.json".into(),
            expected: CageExpectedVerdict::Allow,
        },
        CageCase {
            name: "refusal_path".into(),
            vector_path: "vectors/refusal_path.json".into(),
            expected: CageExpectedVerdict::Refuse,
        },
        CageCase {
            name: "tamper_gate".into(),
            vector_path: "vectors/tamper_path.json".into(),
            expected: CageExpectedVerdict::Refuse,
        },
    ];

    run_cage_parity(&cases)
}