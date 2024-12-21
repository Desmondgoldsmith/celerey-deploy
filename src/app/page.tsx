import Layout from "@/components/templates/templates";
import Container from "@/components/atoms/container/container";

export default function HomePage() {
  return (
    <Layout>
      <Container className="py-12">
        <section className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Welcome to</span>
            <span className="block text-blue-600">Celerey</span>
          </h1>

          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
            Somethib=ng happening here.
          </p>

          <div className="mt-5 sm:mt-8 sm:flex sm:gap-4">
            <button className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
              Get Started
            </button>
            <button className="mt-3 sm:mt-0 w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
              Learn More
            </button>
          </div>
        </section>
      </Container>
    </Layout>
  );
}
