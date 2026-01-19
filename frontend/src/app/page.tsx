"use client"

import { fetchResponses } from "@/libs/api/fetchResponses";
import { InterviewResponse } from "@/types/interviewResponse";
import { useEffect, useState } from "react";
import { ResponseFilters } from "@/components/ResponseFilters";
import { ResponseList } from "@/components/ResponseList";
import { ResponseStatsPanel } from "@/components/ResponseStatsPanel";

export default function Home() {
    const [data, setData] = useState<InterviewResponse[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
    const [selectedSentiments, setSelectedSentiments] = useState<string[]>([]);

    useEffect(() => {
        fetchResponses()
            .then(setData)
            .catch(() => setError("Could not load data"))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    const themes = Array.from(new Set(data.map((item) => item.theme))).sort();
    const sentiments = Array.from(new Set(data.map((item) => item.sentiment))).sort();

    const matches = (selected: string[], value: string): boolean =>
        selected.length === 0 || selected.includes(value);

    const filteredData = data.filter(
        (item) => matches(selectedThemes, item.theme) && matches(selectedSentiments, item.sentiment)
    );

    const toggleValue = (value: string, checked: boolean) => (prev: string[]) =>
        checked ? [...prev, value] : prev.filter((item) => item !== value);

    return (
        <main className="p-6 space-y-4 flex flex-col">
            <h1 className="text-3xl font-semibold">Interview Responses</h1>

            <ResponseFilters
                themes={themes}
                sentiments={sentiments}
                selectedThemes={selectedThemes}
                selectedSentiments={selectedSentiments}
                onThemeToggle={(theme, checked) => {
                    setSelectedThemes(toggleValue(theme, checked))
                }}
                onSentimentToggle={(sentiment, checked) => {
                    setSelectedSentiments(toggleValue(sentiment, checked))
                }}
            />

            <div className="flex flex-row gap-6">
                <ResponseList responses={filteredData} />
                <ResponseStatsPanel
                    data={data}
                    filteredData={filteredData}
                    themes={themes}
                    sentiments={sentiments}
                />
            </div>
        </main>
    );
}
