import { InterviewResponse } from "@/types/interviewResponse";

type ResponseListProps = {
    responses: InterviewResponse[];
};

const sentimentClassName = (sentiment: string) => {
    switch (sentiment.toLowerCase()) {
        case "positive":
            return "border p-3 rounded bg-green-500";
        case "negative":
            return "border p-3 rounded bg-red-500";
        case "neutral":
            return "border p-3 rounded bg-blue-500";
        default:
            return "border p-3 rounded bg-blue-500";
    }
};

export function ResponseList({ responses }: ResponseListProps) {
    return (
        <section className="flex-1">
            <ul className="space-y-3 text-white">
                {responses.map((response, index) => (
                    <li key={index} className={sentimentClassName(response.sentiment)}>
                        <p><strong>Question:</strong> {response.question}</p>
                        <p><strong>Response:</strong> {response.response_text}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
