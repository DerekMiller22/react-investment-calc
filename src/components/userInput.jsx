export default function UserInput({ onChangeInput, userInput }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Intial Investment</label>
          <input
            type="number"
            required
            value={userInput.intialInvestment}
            onChange={(event) =>
              onChangeInput("intialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label> Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onChangeInput("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onChangeInput("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label> Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => onChangeInput("duration", event.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
