import { InterviewResponse } from "@/types/interviewResponse";

type ResponseStatsPanelProps = {
    data: InterviewResponse[];
    filteredData: InterviewResponse[];
    themes: string[];
    sentiments: string[];
};

const sentimentBarClassName = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
        case "positive":
            return "bg-green-500";
        case "negative":
            return "bg-red-500";
        case "neutral":
            return "bg-blue-500";
        default:
            return "bg-slate-500";
    }
};

export function ResponseStatsPanel({
    data,
    filteredData,
    themes,
    sentiments,
}: ResponseStatsPanelProps) {
    const totalCount = data.length || 1;
    const totalFilteredCount = filteredData.length || 1;

    const themeCounts = data.reduce<Record<string, number>>((result, item) => {
        result[item.theme] = (result[item.theme] ?? 0) + 1;
        return result;
    }, {});

    const sentimentCounts = data.reduce<Record<string, number>>((result, item) => {
        result[item.sentiment] = (result[item.sentiment] ?? 0) + 1;
        return result;
    }, {});

    const filteredThemeCounts = filteredData.reduce<Record<string, number>>((result, item) => {
        result[item.theme] = (result[item.theme] ?? 0) + 1;
        return result;
    }, {});

    const filteredSentimentCounts = filteredData.reduce<Record<string, number>>((result, item) => {
        result[item.sentiment] = (result[item.sentiment] ?? 0) + 1;
        return result;
    }, {});

    const themeStats = themes.map((theme) => ({
        label: theme,
        count: themeCounts[theme] ?? 0,
    }));

    const sentimentStats = sentiments.map((sentiment) => ({
        label: sentiment,
        count: sentimentCounts[sentiment] ?? 0,
    }));

    const filteredThemeStats = themes.map((theme) => ({
        label: theme,
        count: filteredThemeCounts[theme] ?? 0,
    }));

    const filteredSentimentStats = sentiments.map((sentiment) => ({
        label: sentiment,
        count: filteredSentimentCounts[sentiment] ?? 0,
    }));

    return (
        <div className="flex gap-6">
            <aside className="w-80 space-y-6">
                <div className="border rounded p-4 space-y-3">
                    <h2 className="text-lg font-semibold">Filtered Theme Distribution</h2>
                    {filteredThemeStats.map((stat) => (
                        <div key={stat.label} className="space-y-1">
                            <div className="flex justify-between text-sm">
                                <span>{stat.label}</span>
                                <span>{stat.count}</span>
                            </div>
                            <div className="h-2 rounded bg-slate-100">
                                <div
                                    className="h-2 rounded bg-slate-400"
                                    style={{ width: `${(stat.count / totalCount) * 100}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="border rounded p-4 space-y-3">
                    <h2 className="text-lg font-semibold">Filtered Sentiment Distribution</h2>
                    {filteredSentimentStats.map((stat) => (
                        <div key={stat.label} className="space-y-1">
                            <div className="flex justify-between text-sm">
                                <span>{stat.label}</span>
                                <span>{stat.count}</span>
                            </div>
                            <div className="h-2 rounded bg-slate-100">
                                <div
                                    className={`h-2 rounded ${sentimentBarClassName(stat.label)}`}
                                    style={{ width: `${(stat.count / totalFilteredCount) * 100}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </aside>

            <aside className="w-80 space-y-6">
                <div className="border rounded p-4 space-y-3">
                    <h2 className="text-lg font-semibold">Overall Theme Distribution</h2>
                    {themeStats.map((stat) => (
                        <div key={stat.label} className="space-y-1">
                            <div className="flex justify-between text-sm">
                                <span>{stat.label}</span>
                                <span>{stat.count}</span>
                            </div>
                            <div className="h-2 rounded bg-slate-100">
                                <div
                                    className="h-2 rounded bg-slate-400"
                                    style={{ width: `${(stat.count / totalCount) * 100}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="border rounded p-4 space-y-3">
                    <h2 className="text-lg font-semibold">Overall Sentiment Distribution</h2>
                    {sentimentStats.map((stat) => (
                        <div key={stat.label} className="space-y-1">
                            <div className="flex justify-between text-sm">
                                <span>{stat.label}</span>
                                <span>{stat.count}</span>
                            </div>
                            <div className="h-2 rounded bg-slate-100">
                                <div
                                    className={`h-2 rounded ${sentimentBarClassName(stat.label)}`}
                                    style={{ width: `${(stat.count / totalCount) * 100}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </aside>
        </div>
    );
}
