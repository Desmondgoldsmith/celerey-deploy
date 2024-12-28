import { SectionProgressBarProps } from "../../types";

export const SectionProgressBars = ({
  sections,
  currentSection,
}: SectionProgressBarProps) => {
  return (
    <div className="max-w-2xl mx-auto space-y-2">
      <div className="flex gap-2">
        {Object.values(sections).map((section) => {
          const progressPercentage = section.isCompleted
            ? 100
            : (section.currentStep / section.totalSteps) * 100;

          return (
            <div key={section.id} className="flex-1">
              <div className="h-1 bg-gray-200 rounded-full">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${
                    section.isCompleted
                      ? "bg-navyLight"
                      : section.isActive
                      ? "bg-navyLight"
                      : "bg-gray-300"
                  }`}
                  style={{
                    width: `${progressPercentage}%`,
                  }}
                />
              </div>
              <div
                className={`text-sm mt-1 ${
                  section.id === currentSection ? "text-black" : "text-gray-400"
                }`}
              >
                {section.title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
