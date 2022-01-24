import React from 'react';
import { graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import { LocationMarkerIcon, AtSymbolIcon } from '@heroicons/react/solid';

function age(dob) {
  let diff_ms = Date.now() - dob.getTime();
  let age_dt = new Date(diff_ms);
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

const style = {
  p: 'font-light leading-relaxed pb-4',
  icon: 'h-3 w-3 text-gray-800',
  info: 'pl-1 text-xs font-light',
};

const Index = ({ data }) => {
  const { name, title, description } = data.site.siteMetadata;
  return (
    <>
      <div className="border rounded-lg p-2 flex flex-wrap md:flex-nowrap justify-center">
        <div className="py-2 md:w-56 flex flex-row md:flex-col md:flex-none justify-start items-center">
          <div className="min-w-fit">
            <StaticImage
              className="rounded-full"
              src="../images/id.png"
              alt="Matthias Monnier"
              placeholder="blurred"
              layout="constrained"
              width={200}
              height={200}
            />
          </div>

          <div className="flex flex-col px-4 md:py-4">
            <div className="flex items-center">
              <LocationMarkerIcon className={style.icon} />
              <p className={style.info}>Montpellier, France</p>
            </div>
            <div className="flex items-center">
              <AtSymbolIcon className={style.icon} />
              <p className={style.info}>matthias.monnier@gmail.com</p>
            </div>
            <div className="flex items-center">
              <AtSymbolIcon className={style.icon} />
              <p className={style.info}>github.com</p>
            </div>
          </div>
        </div>

        <div className="px-4 grow text-justify">
          <p className={style.p}>
            Hi I'm Mat, a {age(new Date(1993, 10, 9))} years old french
            developer.
          </p>
          <p className={style.p}>
            I love designing elegant solutions to complex problem.
          </p>
          <p className={style.p}>
            I'm fascinated by Web technologies, Lowtechs and the Blockchain
            world.
          </p>
          <p className={style.p}>
            I started learning code (C language) when I was 13 and I fall in
            love with the programming process. I love designing software
            architectures.
          </p>

          <p className={style.p}>
            After a master degree in robotics and embedded software programming
            I worked 5 years in KeyInfuser, a innovatice robotic startup. I
            first started as a R&D developer and then was in charge of the R&D
            departement and the software architecture of the robotic solution. I
            took part of the whole product lifecycle: from software design, to
            coding, testing, deploying and maintaining the product.
          </p>
        </div>
      </div>

      <h1 className="font-xs font-light ">{name}</h1>
      <h1>{title}</h1>
      <h1>{description}</h1>
    </>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        name
        title
        description
      }
    }
  }
`;
