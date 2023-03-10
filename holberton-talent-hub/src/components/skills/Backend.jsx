import React from 'react';
import styled from 'styled-components';

/* A styled component. */

export const BackendWrapper = styled.section`
  .skills__contenct {
    background-color: var(--container-color);
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 2rem 4rem;
    border-radius: 1.25rem;
  }

  .skills__title {
    font-size: 20px;
    font-weight: 900;
    text-align: center;
    margin-bottom: 3rem;
  }

  .skills__box {
    display: flex;
    justify-content: center;
    column-gap: 2.5rem;
  }

  .skills__group {
    display: grid;
    align-items: flex-start;
    row-gap: 2rem;
  }

  .skills__data {
    display: flex;
    column-gap: 0.5rem;
  }

  .skills .uil-check-circle {
    font-size: 1rem;
    color: var(--title-color);
  }
  .skills__name {
    font-size: 20px;
    font-weight: var(--font-medium);
    line-height: 20px;
  }

  .skills__level {
    font-weight: inherit;
    font-size: var(--normal-font-size);
  }
`;

/* A function that returns the HTML code. */

export const Backend = () => {
  return (
    <BackendWrapper>
      <div className="skills__contenct">
        <h3 className="skills__title">Backend Developer</h3>

        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <i class="uil uil-check-circle"></i>

              <div>
                <h3 className="skills__name">Java</h3>
                <span className="skills__level">Basic</span>
              </div>
            </div>
            <div className="skills__data">
              <i class="uil uil-check-circle"></i>

              <div>
                <h3 className="skills__name">Python</h3>
                <span className="skills__level">Advanced</span>
              </div>
            </div>
            <div className="skills__data">
              <i class="uil uil-check-circle"></i>

              <div>
                <h3 className="skills__name">Django</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>

          <div className="skills__group">
            <div className="skills__data">
              <i class="uil uil-check-circle"></i>

              <div>
                <h3 className="skills__name">MySQL</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i class="uil uil-check-circle"></i>

              <div>
                <h3 className="skills__name">Flask</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
            <div className="skills__data">
              <i class="uil uil-check-circle"></i>

              <div>
                <h3 className="skills__name">PHP</h3>
                <span className="skills__level">Intermediate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackendWrapper>
  );
};
