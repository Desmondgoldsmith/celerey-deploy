interface SectionProgressBarProps {
  sections: {
    id: string;
    title: string;
    currentStep: number;
    totalSteps: number;
    isActive: boolean;
  }[];
  activeSection: string;
}

export const SectionProgressBars = ({
  sections,
  activeSection,
}: SectionProgressBarProps) => {
  return (
    <div className="max-w-2xl mx-auto space-y-2">
      <div className="flex gap-2">
        {sections.map((section) => (
          <div key={section.id} className="flex-1">
            <div className="h-1 bg-gray-200 rounded-full">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  section.isActive ? "bg-navyLight" : "bg-gray-300"
                }`}
                style={{
                  width: section.isActive
                    ? `${(section.currentStep / section.totalSteps) * 100}%`
                    : "0%",
                }}
              />
            </div>
            <div
              className={`text-sm mt-1 ${
                section.id === activeSection ? "text-black" : "text-gray-400"
              }`}
            >
              {section.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
