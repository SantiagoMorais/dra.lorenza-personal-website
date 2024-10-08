import styled from "styled-components";
import data from "@json/data.json";
import { faqBreakPoints, fontSize, fontStyle, style } from "@styles/style";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const FAQs = () => {
  const [questionSelected, setQuestionSelected] = useState("");

  const handleAccordion = (faq: string) => {
    questionSelected === faq
      ? setQuestionSelected("")
      : setQuestionSelected(faq);
  };

  return (
    <Container>
      <h2 className="title">Perguntas Frequentes</h2>
      {data.faqs && (
        <ul className="faqs">
          {data.faqs.map((faq, index) => (
            <li
              className="faq"
              key={index}
              onClick={() => handleAccordion(faq.question)}
            >
              <div className="questionBar" data-testid="question">
                <p className="question">
                  <span className="questionNumber">{index + 1}.</span>{" "}
                  {faq.question}
                </p>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`icon ${questionSelected === faq.question && "rotate"}`}
                />
              </div>
              <p
                className={`answer ${questionSelected === faq.question ? "selected" : ""}`}
                data-testid="answer"
              >
                {faq.answer}
              </p>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  margin-bottom: 5rem;
  padding: 3rem;

  .title {
    font-size: 4rem;
    font-weight: ${fontStyle.boldWeight};
    font-size: ${fontSize.fontSizeLarge};
    color: ${style.primaryColor};
  }

  .faqs {
    max-width: 100rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 2rem;

    .faq {
      cursor: pointer;

      &:hover > .question {
        opacity: 0.6;
      }

      .questionBar {
        font-size: 2.5rem;
        padding-bottom: 1rem;
        border-bottom: 0.2rem solid ${style.tertiaryColor};
        transition: 0.3s;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;

        .question {
          width: 100%;
          text-align: left;
          font-size: ${fontSize.fontSizeMedium};

          .questionNumber {
            font-weight: ${fontStyle.mediumWeight};
          }
        }

        .icon {
          transition: 0.5s ease;

          &.rotate {
            transform: rotate(180deg);
          }
        }
      }

      .answer {
        height: 0;
        overflow: hidden;
        transition: 0.5s ease;
        margin-top: 1rem;
        padding: 0 1rem;
        border-radius: 1rem;
        opacity: 0;
        transform: translateY(-2rem);
        font-size: ${fontSize.fontSizeBase};

        &.selected {
          height: 11rem;
          opacity: 1;
          transform: translateY(0rem);
        }
      }
    }
  }

  @media (max-width: 768px) {
    padding: 3rem 2rem 0;

    .title {
      font-size: 3rem;
    }

    .faqs {
      .faq {
        .questionBar {
          text-align: center;
          font-weight: 500;
          .question {
            font-size: ${fontSize.fontSizeBase};
            .questionNumber {
              font-weight: ${fontStyle.boldWeight};
            }
          }
        }
      }
    }
  }

  ${faqBreakPoints}
`;
