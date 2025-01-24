import { Question } from "../types/Question";

type Props = {
  questions: Question[];
  answers: number[];
};

export const Results = ({ questions, answers,  }: Props) => {
  return (
    <div className="bg-[#0F172A] pt-10">
      <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 px-4">
        {questions.map((item, key) => (
          <div
            key={key}
            className="border border-[#475569] rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#1E293B]"
          >
            <div className="bg-[#1E293B] p-4 sm:p-6 flex items-start gap-3 sm:gap-4">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-[#475569] text-white text-sm sm:text-base font-bold">
                {key + 1}
              </span>
              <h3 className="text-[#E2E8F0] font-semibold text-base sm:text-lg md:text-xl break-words">
                {item.question}
              </h3>
            </div>
            <div className="bg-[#475569] p-4 sm:p-6">
              <div className="rounded-md space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-white font-semibold text-sm sm:text-base mb-1 sm:mb-0 sm:w-32">
                    Resposta correta:
                  </span>
                  <span className="text-[#A3E635] text-sm sm:text-base ml-0 sm:ml-2 break-words">
                    {item.options[Number(item.answer)]}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center">
                  <span className="text-white font-semibold text-sm sm:text-base mb-1 sm:mb-0 sm:w-32">
                    Sua resposta:
                  </span>
                  <span
                    className={`text-sm sm:text-base ml-0 sm:ml-2 break-words ${
                      answers[key] === Number(item.answer)
                        ? "text-[#A3E635]"
                        : "text-[#ff2a3c]"
                    }`}
                  >
                    {answers[key] !== undefined ? item.options[answers[key]] : ''}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};