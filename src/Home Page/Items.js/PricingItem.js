export default function PricingItem({ type }) {
  const basicIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      viewBox="0 0 512 512"
    >
      <ellipse
        cx="256"
        cy="128"
        rx="192"
        ry="80"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="32"
      />
      <path
        d="M448 214c0 44.18-86 80-192 80S64 258.18 64 214M448 300c0 44.18-86 80-192 80S64 344.18 64 300"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="32"
      />
      <path
        d="M64 127.24v257.52C64 428.52 150 464 256 464s192-35.48 192-79.24V127.24"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-miterlimit="10"
        stroke-width="32"
      />
    </svg>
  );

  const plusIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      viewBox="0 0 512 512"
    >
      <path
        d="M315.27 33L96 304h128l-31.51 173.23a2.36 2.36 0 002.33 2.77h0a2.36 2.36 0 001.89-.95L416 208H288l31.66-173.25a2.45 2.45 0 00-2.44-2.75h0a2.42 2.42 0 00-1.95 1z"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
    </svg>
  );

  const premiumIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      viewBox="0 0 512 512"
    >
      <path
        d="M35.42 188.21l207.75 269.46a16.17 16.17 0 0025.66 0l207.75-269.46a16.52 16.52 0 00.95-18.75L407.06 55.71A16.22 16.22 0 00393.27 48H118.73a16.22 16.22 0 00-13.79 7.71L34.47 169.46a16.52 16.52 0 00.95 18.75zM48 176h416"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="M400 64l-48 112-96-128M112 64l48 112 96-128M256 448l-96-272M256 448l96-272"
      />
    </svg>
  );

  const noIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="M368 368L144 144M368 144L144 368"
      />
    </svg>
  );

  const yesIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="ionicon"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
        d="M416 128L192 384l-96-96"
      />
    </svg>
  );

  const data = [
    {
      mainIcon: basicIcon,
      title: "Basic",
      monthlyPrice: "15€",
      yearlyPrice: "165€",
      payment: "/Month",
      yesIcon: yesIcon,
      noIcon: noIcon,
      text: "A solid start",
      feature1: "2 trains per week",
      feature2: "No priority court reservations",
      feature3: "Social play events",
      feature4: "No gym access",
      feature5: "No personal trainer",
    },
    {
      mainIcon: plusIcon,
      title: "Plus",
      monthlyPrice: "30€",
      yearlyPrice: "330€",
      payment: "/Month",
      yesIcon: yesIcon,
      noIcon: noIcon,
      text: "Your upgrade choice",
      feature1: "3 trains per week",
      feature2: "No priority court reservations",
      feature3: "League play events",
      feature4: "Gym access",
      feature5: "No personal trainer",
    },
    {
      mainIcon: premiumIcon,
      title: "Premium",
      monthlyPrice: "40€",
      yearlyPrice: "440€",
      payment: "/Month",
      yesIcon: yesIcon,
      noIcon: noIcon,
      text: "The ultimate experience",
      feature1: "5 trains per week",
      feature2: "Priority court reservations",
      feature3: "Premium tennis events",
      feature4: "Full gym access",
      feature5: "Personal trainer",
    },
  ];

  return data.map((item) => (
    <div className="pricing-div">
      <div className="pricing-main-icon">{item.mainIcon}</div>
      <h3 className="pricing-title">{item.title}</h3>
      <p className="pricing-text">{item.text}</p>
      <div className="pricing-payment-div">
        <p className="pricing-price">
          {type === "monthly" ? item.monthlyPrice : item.yearlyPrice}
        </p>
        <p className="pricing-payment">
          {type === "monthly" ? item.payment : "/Year"}
        </p>
      </div>
      <div className="features-div">
        <div className="individual-feature-div">
          {item.feature1.includes("No") ? (
            <>
              <div className="feature-no-icon">{item.noIcon}</div>
              <p className="feature-text">{item.feature1}</p>
            </>
          ) : (
            <>
              <div className="feature-yes-icon">{item.yesIcon}</div>
              <p className="feature-text">{item.feature1}</p>
            </>
          )}
        </div>
        <div className="individual-feature-div">
          {item.feature2.includes("No") ? (
            <>
              <div className="feature-no-icon">{item.noIcon}</div>
              <p className="feature-text">{item.feature2}</p>
            </>
          ) : (
            <>
              <div className="feature-yes-icon">{item.yesIcon}</div>
              <p className="feature-text">{item.feature2}</p>
            </>
          )}
        </div>
        <div className="individual-feature-div">
          {item.feature3.includes("No") ? (
            <>
              <div className="feature-no-icon">{item.noIcon}</div>
              <p className="feature-text">{item.feature3}</p>
            </>
          ) : (
            <>
              <div className="feature-yes-icon">{item.yesIcon}</div>
              <p className="feature-text">{item.feature3}</p>
            </>
          )}
        </div>
        <div className="individual-feature-div">
          {item.feature4.includes("No") ? (
            <>
              <div className="feature-no-icon">{item.noIcon}</div>
              <p className="feature-text">{item.feature4}</p>
            </>
          ) : (
            <>
              <div className="feature-yes-icon">{item.yesIcon}</div>
              <p className="feature-text">{item.feature4}</p>
            </>
          )}
        </div>
        <div className="individual-feature-div">
          {item.feature5.includes("No") ? (
            <>
              <div className="feature-no-icon">{item.noIcon}</div>
              <p className="feature-text">{item.feature5}</p>
            </>
          ) : (
            <>
              <div className="feature-yes-icon">{item.yesIcon}</div>
              <p className="feature-text">{item.feature5}</p>
            </>
          )}
        </div>
      </div>
    </div>
  ));
}
