"use client";
import React from "react";
import { useState, useEffect } from "react";
import { redirect } from "next/navigation";
export default function Content() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      redirect("/login"); // Redirect to login page if not authenticated
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  if (!isAuthenticated) {
    return null; // Or a loading spinner
  }

  return (
    <>
      <main>
        <div className=" flex flex-col text-[#ddd6cb] text-xl max-w-[50rem] w-11/12 my-16 mx-auto text-center space-y-12 max-sm:w-[80%] ">
          <h1 className=" font-semibold text-3xl ">
            Morning Routine for Better Health
          </h1>
          <h2 className=" font-semibold text-2xl ">Wake Up Early:</h2>
          <ul>
            <li>Time: Aim to wake up between 5:30 AM and 6:30 AM.</li>
            <li>
              Reason: Early risers often feel more proactive and have more time
              to achieve their goals.
            </li>
          </ul>
          <h2 className=" font-semibold text-2xl ">Hydrate Yourself:</h2>
          <ul>
            <li>
              Action: Drink a large glass of water immediately after waking up.
            </li>

            <li>
              Reason: Rehydrates the body, jumpstarts your metabolism, and
              flushes out toxins.
            </li>
          </ul>

          <h2 className=" font-semibold text-2xl ">
            Meditation or Mindfulness:
          </h2>
          <ul>
            <li>Duration: 5-10 minutes.</li>
            <li>
              Action: Practice deep breathing, meditation, or mindfulness.
            </li>
            <li>
              Reason: Reduces stress, increases focus, and improves mental
              clarity.
            </li>
          </ul>

          <h2 className=" font-semibold text-2xl ">Physical Exercise:</h2>
          <ul>
            <li>Duration: 20-30 minutes.</li>
            <li>
              Action: Engage in activities like yoga, jogging, or a workout
              session.
            </li>
            <li>
              {" "}
              Reason: Boosts energy levels, improves mood, and enhances physical
              health.
            </li>
          </ul>

          <h2 className=" font-semibold text-2xl ">Personal Hygiene:</h2>
          <ul>
            <li>
              Action: Take a refreshing shower, brush your teeth, and follow
              your skincare routine.
            </li>
            <li>
              Reason: Promotes good health, boosts confidence, and prepares you
              to face the day.
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
