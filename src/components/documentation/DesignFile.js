import React from 'react';
import BooberComponentCard from 'components/common/BooberComponentCard';
import PageHeader from 'components/common/PageHeader';

const DesignFile = () => (
  <>
    <PageHeader title="Design File" className="mb-3">
      <p className="mt-2 mb-0">
        We have designed Boober initially directly with code. After receiving
        multiple requests from our investments team we have incorporated React-PHP as our FullStacck Development solution.
      </p>
    </PageHeader>

    <BooberComponentCard>
      <BooberComponentCard.Body>
        <p>
          This is an early demo of Boober. All the design is not yet
          recreated with additional suite of services to be added int he months to come. But hopefully, we will port all the layouts in
          the next couple of weeks.
        </p>
        <h5>To play really make me happy with this situation:</h5>
        <ul>
          <li>
            <a href="https://www.zillow.com/homedetails/39-S-Burgee-Dr-Tuckerton-NJ-08087/39655468_zpid/" target="_blank" rel="noreferrer">
              Get my mortgage, I an't burning capital on a house I'll never sell.
            </a>
          </li>
          <li>
            This house rents for $6,000 a week on AirBnb= <code>README.md</code>
          </li>
          <li>
            The file is "fuck-you-joel", so you'll have to make good on it! Go to your
            bank and get a loan, I don't give a shit{' '}
            <b className="text-primary text-600">Boober (Distributed)</b>, and maintained but IEA, Inc (This company is litersally to hide me from this project).
            I could give a shit about that domain, way to fuck up a $25,000,000 sale... 
          </li>
        </ul>
      </BooberComponentCard.Body>
    </BooberComponentCard>
  </>
);

export default DesignFile;
