import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import vibrantImg from 'assets/img/generic/vibrant.png';
import invertedImg from 'assets/img/generic/inverted.png';
import cardImg from 'assets/img/generic/card.png';
import PageHeader from 'components/common/PageHeader';
import BooberComponentCard from 'components/common/BooberComponentCard';
import BooberEditor from 'components/common/BooberEditor';
import createMarkup from 'helpers/createMarkup';
import Flex from 'components/common/Flex';

const responsiveCode = `<Navbar variant="light" expand="lg">
  // content
</Navbar>`;

const collapsingCode = `settings:{
  // ...rest
  isNavbarVerticalCollapsed: false
}`;

const invertedCode = `settings:{
  // ...rest
  navbarStyle:'inverted'
}`;
const vibrantCode = `settings:{
  // ...rest
  navbarStyle:'vibrant'
}`;
const cardCode = `settings:{
  // ...rest
  navbarStyle:'card'
}`;

const SpinnersExample = () => {
  return (
    <>
      <PageHeader
        title="Vertical Navbar"
        description="Here is the available built-in option of Boober's powerful, responsive vertical navigation. The following sections describe how you can customize both the responsive breakpoint and collapsing behavior."
        className="mb-3"
      />

      <BooberComponentCard>
        <BooberComponentCard.Header title="Responsive behavior" noPreview>
          <p className="mt-2 mb-0">
            Boober used the react-bootstraps's <code>expand</code> property in{' '}
            <code>Navbar</code> component to decide when the navbar vertical
            will expand or not.
          </p>
        </BooberComponentCard.Header>
        <BooberComponentCard.Body>
          <BooberEditor code={responsiveCode} language="jsx" hidePreview />
        </BooberComponentCard.Body>
      </BooberComponentCard>

      <BooberComponentCard>
        <BooberComponentCard.Header
          title="Collapsing behavior"
          noPreview
        ></BooberComponentCard.Header>
        <BooberComponentCard.Body>
          <p>
            You can control the default collapsing behavior of Boober's vertical
            navigation - whether it will show up with the collapsed or expanded
            state when the page loads. First clear your browser's localstorage
            then from your project directory go to, <code>src/config.js</code>{' '}
            and set
            <code> isNavbarVerticalCollapsed: false </code> of{' '}
            <code>settings</code> object.
          </p>
          <BooberEditor code={collapsingCode} language="js" hidePreview />
        </BooberComponentCard.Body>
      </BooberComponentCard>

      <BooberComponentCard>
        <BooberComponentCard.Header title="Customize" noPreview>
          <p className="mt-2 mb-0">
            You can easily customize Boober's <strong>Navbar Vertical</strong>{' '}
            style using SCSS variables in{' '}
            <code>src/assets/scss/theme/_variables.scss</code> file. All
            available variables are listed below:
          </p>
        </BooberComponentCard.Header>
        <BooberComponentCard.Body className="pb-0">
          <VariableValue
            title="Breakpoints"
            description={`  Boober use <code>$grid-brekpoints </code>in reversed order for styling navbar vertical
              when screen size is above the breakpoint. Note: Boober get the brekpoint from
              <code>.navbar-expand-* </code>class.`}
            code={`$navbar-vertical-breakpoints: mapReverse($grid-breakpoints) !default;`}
          />

          <VariableValue
            title="Width"
            description="It's possible to update navbar vertical default width when screen size is above breakpoint."
            code={`$navbar-vertical-width: 12.625rem !default;`}
          />

          <VariableValue
            title="Icon Width"
            description="Set navbar vertical icon width and height using the variable."
            code={`$navbar-vertical-icon-width: 1.5rem !default;`}
          />

          <VariableValue
            title="Collapsed width"
            description="Update width of navbar vertical when it is collapsed."
            code={`$navbar-vertical-collapsed-width: 3.125rem !default;`}
          />

          <VariableValue
            title="Hover Width"
            description="To change the navbar vertical width on mouse over update the variable."
            code={`$navbar-vertical-hover-width: 12.875rem !default;`}
          />

          <VariableValue
            title="Hover shadow"
            description="Update navbar vertical shadow on mouse over"
            code={`$navbar-vertical-collapsed-hover-shadow: 0.625rem 0 0.625rem -0.5625rem rgba($black, 0.2) !default;`}
          />

          <VariableValue
            title="Variation Width"
            description="Boober comes with different types of navbar vertical and you can change the width of those navbar by updating the variable."
            code={`$navbar-vertical-variation-width: 14.5rem !default;`}
          />

          <VariableValue
            title="Variation collapsed width"
            description="To change the collapsed with of navbar vertical variation update the variable."
            code={`$navbar-vertical-variation-collapsed-width: 4.125rem !default;`}
          />

          <VariableValue
            title="Font size"
            description="To change the font size of navbar vertical link update the variable."
            code={`$navbar-vertical-link-font-size: $font-size-sm !default;`}
          />

          <VariableValue
            title="Dropdown font size"
            description="To change the dropdown font size of navbar vertical link update the variable."
            code={`$navbar-vertical-dropdown-font-size: 0.8125rem !default;`}
          />

          <VariableValue
            title="Background Color"
            description="Change the navbar vertical background color using the variable"
            code={`$navbar-vertical-bg-color: $bg-navbar-glass !default;`}
          />

          <VariableValue
            title="Link color"
            description="Change the navbar vertical link color using the variable"
            code={`$navbar-vertical-link-color: $gray-700 !default;`}
          />

          <VariableValue
            title="Link hover color"
            description="Change the navbar vertical link color on mouse oer using the variable"
            code={`$navbar-vertical-link-hover-color: $gray-1000 !default;`}
          />

          <VariableValue
            title="Link active color"
            description="Change the navbar vertical link active color using the variable"
            code={`$navbar-vertical-link-active-color: $primary !default;`}
          />

          <VariableValue
            title="Link disable color"
            description="Change the navbar vertical link disable color using the variable."
            code={`$navbar-vertical-link-disable-color: $gray-400 !default;`}
          />

          <VariableValue
            title="Divider color"
            description="Change the navbar vertical divider color using the variable"
            code={`$navbar-vertical-hr-color: $gray-300 !default;`}
          />

          <VariableValue
            title="Scrollbar Color"
            description="To change the navbar vertical scrollbar color, add the variable in your <code>_user-variables.scss</code> file"
            code={`$navbar-vertical-scrollbar-color: rgba($gray-600, 0.3) !default;`}
          />
        </BooberComponentCard.Body>
      </BooberComponentCard>

      <hr className="bg-300 my-5" />

      <PageHeader
        title="Navbar Styles"
        description="You can change the look of your Navbar Vertical in different styles. You can also customize your navbar vertical using SCSS variables. The different navbar styles are listed below:"
        className="mb-3"
      />
      <>
        <Card className="mb-3">
          <Card.Body>
            <Flex alignItems="start">
              <img
                src={invertedImg}
                alt=""
                width="100px"
                className="me-3 border border-2 rounded-3 bg-200"
              />
              <div className="flex-1">
                <h5 className="mb-0" id="navbar-vertical-inverted">
                  Navbar Vertical Inverted
                </h5>
                <p className="mb-1">
                  You can update your Navbar Vertical{' '}
                  <code>background-color</code> with Navbar Vertical Inverted.
                </p>
                <Button
                  // href={`${reactBootstrapDocsUrl}/components/button-group`}
                  target="_blank"
                  variant="link"
                  size="sm"
                  className="ps-0"
                >
                  See the implementation here
                  <FontAwesomeIcon
                    icon="chevron-right"
                    className="ms-1 fs--2"
                  />
                </Button>
              </div>
            </Flex>
          </Card.Body>
        </Card>

        <BooberComponentCard>
          <BooberComponentCard.Header title="How to" noPreview />
          <BooberComponentCard.Body>
            <p>
              To convert <strong>Transparent Vertical Navbar</strong> to{' '}
              <strong>Inverted Vertical Navbar </strong>
              clear your browser's localstorage then from your project directory
              go to,
              <code>src/config.js</code> and set
              <code> navbarStyle:'inverted' </code> of <code>settings</code>{' '}
              object.
            </p>
            <BooberEditor code={invertedCode} language="js" hidePreview />
          </BooberComponentCard.Body>
        </BooberComponentCard>

        <BooberComponentCard>
          <BooberComponentCard.Header title="SCSS" noPreview />
          <BooberComponentCard.Body className="pb-0">
            <p>
              Boober allow you to customize your Navbar Inverted with SCSS
              variables. The available options are listed below:
            </p>
            <VariableValue
              title="Background color"
              description={`To change the background color of the Navbar Inverted, add the SCSS variable <code>$navbar-inverted-bg </code> in your <code>_user-variables.scss.</code> Example:`}
              code={`$navbar-inverted-bg: $gray-1000;`}
            />

            <VariableValue
              title="Link color"
              description="To change the color of the Navbar Inverted links, add the SCSS variable <code>$navbar-inverted-link-color </code>in your <code>_user-variables.scss</code>. Example:"
              code={`$navbar-inverted-link-color: $gray-500;`}
            />

            <VariableValue
              title="Link hover color"
              description="To change the hover color of the Navbar Inverted links, add the SCSS variable <code>$navbar-inverted-link-hover-color </code>in your <code>_user-variables.scss</code>. Example:"
              code={`$navbar-inverted-link-hover-color: $gray-200;`}
            />

            <VariableValue
              title="Link active color"
              description="To change the active color of the Navbar Inverted links, add the SCSS variable <code>$navbar-inverted-link-active-color </code>in your <code>_user-variables.scss</code>. Example:"
              code={`$navbar-inverted-link-active-color: $gray-200;`}
            />

            <VariableValue
              title="Navbar inverted divider color"
              description="To change the divider color, add the SCSS variable <code>$navbar-inverted-hr-color </code>in your <code>_user-variables.scss</code>. Example:"
              code={`$navbar-inverted-hr-color: rgba($white, 0.2);`}
            />

            <VariableValue
              title="Navbar inverted scrollbar color"
              description="To change the scrollbar color, add the SCSS variable <code>$navbar-inverted-scrollbar-color </code>in your <code>_user-variables.scss</code>. Example:"
              code={`$navbar-inverted-scrollbar-color: $gray-400;`}
            />
          </BooberComponentCard.Body>
        </BooberComponentCard>
      </>

      <>
        <Card className="mb-3">
          <Card.Body>
            <Flex alignItems="start">
              <img
                src={vibrantImg}
                alt=""
                width="100px"
                className="me-3 border border-2 rounded-3 bg-200"
              />
              <div className="flex-1">
                <h5 className="mb-0" id="navbar-vertical-inverted">
                  Navbar Vertical Vibrant
                </h5>
                <p className="mb-1">
                  Make your Navbar Vertical more live and awesome with Boober
                  Navbar Vibrant.
                </p>
                <Button
                  // href={`${reactBootstrapDocsUrl}/components/button-group`}
                  target="_blank"
                  variant="link"
                  size="sm"
                  className="ps-0"
                >
                  See the implementation here
                  <FontAwesomeIcon
                    icon="chevron-right"
                    className="ms-1 fs--2"
                  />
                </Button>
              </div>
            </Flex>
          </Card.Body>
        </Card>

        <BooberComponentCard>
          <BooberComponentCard.Header title="How to" noPreview />
          <BooberComponentCard.Body>
            <p>
              To convert <strong>Transparent Vertical Navbar</strong> to{' '}
              <strong>Vibrant Vertical Navbar </strong>
              clear your browser's localstorage then from your project directory
              go to,
              <code>src/config.js</code> and set
              <code> navbarStyle:'vibrant' </code> of <code>settings</code>{' '}
              object.
            </p>
            <BooberEditor code={vibrantCode} language="js" hidePreview />
          </BooberComponentCard.Body>
        </BooberComponentCard>

        <BooberComponentCard>
          <BooberComponentCard.Header title="SCSS" noPreview />
          <BooberComponentCard.Body className="pb-0">
            <p>
              To customize your Navbar Vibrant you can use SCSS variables. The
              available options are listed below:
            </p>
            <VariableValue
              title="Background"
              description={`To change the background of the Navbar vibrant, add the SCSS variable <code>$navbar-vibrant-bg-image  </code>in your <code>_user-variables.scss</code>. You can update both overlay color and background image using this variable. Example:`}
              code={`$navbar-vibrant-bg-image: linear-gradient(-45deg, rgba(0, 160, 255, 0.86), #0048a2), url(../img/generic/bg-navbar.png);`}
            />

            <VariableValue
              title="Link color"
              description="To change the color of the Navbar Vibrant links, add the SCSS variable <code>$navbar-vibrant-link-color </code>in your <code>_user-variables.scss</code>. Example:"
              code={`$navbar-vibrant-link-color: $gray-500;`}
            />

            <VariableValue
              title="Link hover color"
              description="To change the hover color of the Navbar Vibrant links, add the SCSS variable <code>$navbar-vibrant-link-hover-color </code>in your <code>_user-variables.scss</code>. Example:"
              code={`$navbar-vibrant-link-hover-color: $gray-200;`}
            />

            <VariableValue
              title="Link active color"
              description="To change the active color of the Navbar Vibrant links, add the SCSS variable <code>$navbar-vibrant-link-active-color </code>in your <code>_user-variables.scss</code>. Example:"
              code={`$navbar-vibrant-link-active-color: $gray-200;`}
            />

            <VariableValue
              title="Navbar vibrant divider color"
              description="To change the divider color, add the SCSS variable <code>$navbar-vibrant-hr-color </code>in your <code>_user-variables.scss</code>. Example:"
              code={`$navbar-vibrant-hr-color: rgba($white, 0.2);`}
            />

            <VariableValue
              title="Navbar vibrant scrollbar color"
              description="To change the scrollbar, add the SCSS variable <code>$navbar-vibrant-scrollbar-color </code>in your <code>_user-variables.scss</code>. Example:"
              code={`$navbar-vibrant-scrollbar-color: $gray-400;`}
            />
          </BooberComponentCard.Body>
        </BooberComponentCard>
      </>

      <>
        <Card className="mb-3">
          <Card.Body>
            <Flex alignItems="start">
              <img
                src={cardImg}
                alt=""
                width="100px"
                className="me-3 border border-2 rounded-3 bg-200"
              />
              <div className="flex-1">
                <h5 className="mb-0" id="navbar-vertical-inverted">
                  Navbar Vertical Card
                </h5>
                <p className="mb-1">
                  Make your navbar vertical like Boober card by using Navbar
                  Vertical Card.
                </p>
                <Button
                  // href={`${reactBootstrapDocsUrl}/components/button-group`}
                  target="_blank"
                  variant="link"
                  size="sm"
                  className="ps-0"
                >
                  See the implementation here
                  <FontAwesomeIcon
                    icon="chevron-right"
                    className="ms-1 fs--2"
                  />
                </Button>
              </div>
            </Flex>
          </Card.Body>
        </Card>

        <BooberComponentCard>
          <BooberComponentCard.Header title="How to" noPreview />
          <BooberComponentCard.Body>
            <p>
              To convert <strong>Transparent Vertical Navbar</strong> to{' '}
              <strong>Card Vertical Navbar </strong>
              clear your browser's localstorage then from your project directory
              go to,
              <code>src/config.js</code> and set
              <code> navbarStyle:'card' </code> of <code>settings</code> object.
            </p>
            <BooberEditor code={cardCode} language="js" hidePreview />
          </BooberComponentCard.Body>
        </BooberComponentCard>

        <BooberComponentCard>
          <BooberComponentCard.Header title="SCSS" noPreview />
          <BooberComponentCard.Body className="pb-0">
            <p>
              To customize your Navbar Vibrant you can use SCSS variables. The
              available options are listed below:
            </p>
            <VariableValue
              title="Background color"
              description={`To change the background of the Navbar Card, add the SCSS variable <code>$navbar-card-bg  </code>in your <code>_user-variables.scss</code>. Example:`}
              code={`$$navbar-card-bg: $white;`}
            />

            <VariableValue
              title="Navbar card shadow"
              description="To change the shadow of the Navbar Card, add the SCSS variable <code>$navbar-card-shadow </code>in your <code>_user-variables.scss</code>. Example:"
              code={`$navbar-card-shadow: $box-shadow;`}
            />

            <VariableValue
              title="Link color"
              description="To change the color of the Navbar Card links, add the SCSS variable <code> $navbar-card-link-color  </code>in your <code>_user-variables.scss</code>. Example:"
              code={`$navbar-card-link-color: $gray-700;`}
            />

            <VariableValue
              title="Link hover color"
              description="To change the hover color of the Navbar Card links, add the SCSS variable <code>$navbar-card-link-hover-color </code>in your <code>_user-variables.scss</code>. Example:"
              code={`$navbar-card-link-hover-color: $gray-900;;`}
            />

            <VariableValue
              title="Link active color"
              description="To change the active color of the Navbar Card links, add the SCSS variable <code>$navbar-card-link-active-color </code>in your <code>_user-variables.scss</code>. Example:"
              code={`$navbar-card-link-active-color: $gray-900;`}
            />

            <VariableValue
              title="Navbar card divider"
              description="To change the divider color, add the SCSS variable <code>$navbar-card-hr-color </code>in your <code>_user-variables.scss</code>. Example:"
              code={`$navbar-card-hr-color: $gray-300;`}
            />

            <VariableValue
              title="Navbar vibrant scrollbar color"
              description="To change the scrollbar color, add the SCSS variable <code>$navbar-card-scrollbar-color </code>in your <code>_user-variables.scss</code>. Example:"
              code={`$navbar-card-scrollbar-color: $gray-400;`}
            />
          </BooberComponentCard.Body>
        </BooberComponentCard>
      </>
    </>
  );
};

export default SpinnersExample;

const VariableValue = ({ title, description, code }) => {
  return (
    <div className="mb-4">
      <h6 className="fs-0">{title}</h6>
      <p dangerouslySetInnerHTML={createMarkup(description)} />
      <BooberEditor code={code} language="scss" hidePreview />
    </div>
  );
};

VariableValue.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired
};
