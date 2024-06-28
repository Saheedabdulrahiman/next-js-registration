import Image from "next/image";
import fitImg from "@/assets/fit6.jpg";

export default function page() {
  return (
    <>
      <header className="flex gap-12 my-12 mx-auto w-11/12 max-w-[75rem]  ">
        <div className="w-[40rem] h-[25rem] max-sm:hidden ">
          <Image
            className=" w-[25rem] h-[25rem] rounded-lg   "
            src={fitImg}
            alt="a man doing pullups"
          />
        </div>
        <div className=" w-1/2 my-auto space-y-16 max-sm:w-[90%] max-sm:mx-auto">
          <h1 className=" font-bold text-amber-700 text-4xl">
            Welcome to FitScience: Your Source for Fitness Insights
          </h1>
          <h2 className=" font-light text-stone-400 text-2xl ">
            Discover the Science Behind Fitness
          </h2>
        </div>
      </header>

      <main className=" max-sm:w-[80%] max-sm:mx-auto">
        <section className=" flex flex-col text-[#ddd6cb] text-xl max-w-[50rem] w-11/12 my-16 mx-auto text-center space-y-12 ">
          <h1 className=" font-semibold text-3xl ">What We Offer</h1>
          <p>
            At FitScience, we are dedicated to bringing you the latest research
            and findings from the field of fitness science. Our content covers a
            wide range of topics, including:
          </p>
          <ul>
            <li>
              {" "}
              Exercise Physiology: Understand how different types of exercise
              affect your body, from strength training and cardio to flexibility
              and endurance workouts.
            </li>
            <li>
              Nutrition and Diet: Learn about the best dietary practices to fuel
              your workouts, enhance recovery, and maintain a healthy lifestyle.
            </li>
            <li>
              Mental Health and Fitness: Explore the connection between physical
              activity and mental well-being, including stress reduction,
              improved mood, and cognitive function.
            </li>
            <li>
              Injury Prevention and Recovery: Get tips on how to prevent common
              fitness injuries and the best practices for recovery if you do get
              injured.
            </li>
          </ul>
        </section>

        <section className=" flex flex-col text-[#ddd6cb] text-xl max-w-[50rem] w-11/12 my-16 mx-auto text-center space-y-12 ">
          <h1 className=" font-semibold text-3xl ">Why FitScience?</h1>
          <p>
            Our team consists of fitness experts, researchers, and enthusiasts
            who are passionate about demystifying the science of fitness. We
            believe that understanding the "why" behind your workouts can
            empower you to achieve better results, avoid pitfalls, and enjoy a
            healthier lifestyle. Here’s what sets us apart:
          </p>
          <ul>
            <li>
              Evidence-Based Content: We rely on peer-reviewed studies and
              reputable sources to ensure the accuracy and reliability of our
              information.
            </li>
            <li>
              Expert Insights: Our articles are crafted by professionals with
              years of experience in fitness, nutrition, and health sciences.
            </li>
            <li>
              Accessible Language: We break down complex scientific concepts
              into easy-to-understand language, making fitness science
              accessible to everyone.
            </li>
          </ul>
        </section>

        <section className=" flex flex-col text-[#ddd6cb] text-xl max-w-[50rem] w-11/12 my-16 mx-auto text-center space-y-12 ">
          <h1 className=" font-semibold text-3xl ">Get Started</h1>
          <p>
            Dive into our latest articles and discover the fascinating world of
            fitness science. Whether you're looking to optimize your workout
            routine, learn about new fitness trends, or simply stay informed
            about the latest research, FitScience is here to support your
            journey every step of the way.
          </p>
        </section>
      </main>
    </>
  );
}
