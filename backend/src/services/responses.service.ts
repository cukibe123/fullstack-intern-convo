import * as fs from "node:fs";
import * as path from "node:path";
import { parse } from "csv-parse/sync";
import type { InterviewResponse } from "../types/interviewResponse.js";

const CSV_PATH = path.join(process.cwd(), "data", "convo_fullstack_intern_sample_dataset.csv");

let cached: InterviewResponse[] | null = null;

export function getInterviewResponses(csvPath: string = CSV_PATH): InterviewResponse[] {
    if (cached) return cached;

    const csv = fs.readFileSync(csvPath, "utf-8");

    const records = parse(csv, {
        columns: true,
        skip_empty_lines: true,
        trim: true
    }) as Array<Record<string, string>>;

    cached = records.map((r) => ({
        question: r.question ?? "",
        response_text: r.response_text ?? "",
        sentiment: r.sentiment ?? "",
        theme: r.theme ?? ""
    }));

    return cached;
}