import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { fetchAPI } from "../lib/api";
import Hero from "../components/home/hero";
import Feature from "../components/home/feature";
import Testimonials from "../components/home/testimonials";
import Courses from "../components/home/courses";
import Partners from "../components/home/partners";

const Home = ({  homepage, menu , testimonials, courses, partners}) => {
  return (
      <Layout menu={menu}>
          {homepage.seo && (<Seo seo={homepage.seo} />)}
          {homepage.hero && (<Hero homepage={homepage} />)}
          {homepage.feature && (<Feature homepage={homepage} />)}
          {testimonials.length && (<Testimonials testimonials={testimonials} />)}
          {courses.length && (<Courses homepage={homepage} courses={courses} />)}
          {partners.length && (<Partners partners={partners} />)}
      </Layout>
  );
};

export async function getStaticProps() {
  // Run API calls in parallel
  const [homepage, menu, testimonials, courses, partners] = await Promise.all([
    fetchAPI("/homepage"),
    fetchAPI("/menu"),
    fetchAPI("/testimonials"),
    fetchAPI("/courses"),
    fetchAPI("/partners"),
  ]);

  return {
    props: { homepage, menu, testimonials, courses, partners},
    revalidate: 1,
  };
}

export default Home;