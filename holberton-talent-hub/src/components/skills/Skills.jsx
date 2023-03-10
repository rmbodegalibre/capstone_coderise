import React from 'react';
import styled from 'styled-components';
import { Frontend } from './Frontend';
import { Backend } from './Backend';

/* A styled component. */

export const SkillWrapper = styled.section`
  & * {
    font-size: 30px;
  }

  .skills__container {
    grid-template-columns: repeat(2, 350px);
    column-gap: 3rem;
    justify-content: center;
  }

  .section__title {
    color: white;
  }

  .section__subtitle {
    color: white;
  }

  .skills__container {
    color: white;
  }

  .skills__title {
    color: white;
  }

  .skills__name {
    color: white;
  }
`;

/**
 * It returns a section element with a title, subtitle, and a container element with two components
 * inside
 * @returns A function that returns a JSX element.
 */

export const Skills = () => {
  return (
    <SkillWrapper>
      <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My technical level</span>

        <div className="skills__container container grid">
          <Frontend />

          <Backend />
        </div>
      </section>
    </SkillWrapper>
  );
};
