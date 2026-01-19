type ResponseFiltersProps = {
    themes: string[];
    sentiments: string[];
    selectedThemes: string[];
    selectedSentiments: string[];
    onThemeToggle: (theme: string, checked: boolean) => void;
    onSentimentToggle: (sentiment: string, checked: boolean) => void;
};

export function ResponseFilters({
    themes,
    sentiments,
    selectedThemes,
    selectedSentiments,
    onThemeToggle,
    onSentimentToggle,
}: ResponseFiltersProps) {
    return (
        <div className="flex flex-wrap gap-6 items-start">
            <fieldset className="space-y-2 rounded-lg border p-4">
                <p className="px-2 text-xl font-semibold">Theme</p>
                <div className="flex flex-wrap gap-3">
                    {themes.map((theme) => (
                        <label
                            key={theme}
                            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm"
                        >
                            <input
                                type="checkbox"
                                checked={selectedThemes.includes(theme)}
                                onChange={(event) => onThemeToggle(theme, event.target.checked)}
                            />
                            <span>{theme}</span>
                        </label>
                    ))}
                </div>
            </fieldset>

            <fieldset className="space-y-2 rounded-lg border p-4">
                <p className="px-2 text-xl font-semibold">Sentiment</p>
                <div className="flex flex-wrap gap-3">
                    {sentiments.map((sentiment) => (
                        <label
                            key={sentiment}
                            className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-sm"
                        >
                            <input
                                type="checkbox"
                                checked={selectedSentiments.includes(sentiment)}
                                onChange={(event) => onSentimentToggle(sentiment, event.target.checked)}
                            />
                            <span>{sentiment}</span>
                        </label>
                    ))}
                </div>
            </fieldset>
        </div>
    );
}
