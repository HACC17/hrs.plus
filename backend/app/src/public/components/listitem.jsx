const React = require("react");
const styled = require("styled-components").default;
const { Arrow, Absolute, Flex, Box } = require("rebass");
const PropTypes = require("prop-types");

class ListItem extends React.Component {
  render() {
    const Wrapper = styled.div`
      border-top: 1px solid var(--silver);
      padding: 0 3rem;
      position: relative;
      display: flex;
      &:last-child {
        border-bottom: 1px solid var(--silver);
      }
    `;

    const Link = styled.a`link-decoration: none;`;

    const { link, title } = this.props;
    return (
      <Link href={link}>
        <Wrapper>
          <Box flex="1 0 0">
            <h3>
              <span className="title">{title}</span>
            </h3>
          </Box>
          <Box flex="0 0 auto" pt={16}>
            <span style={{ textDecoration: "none" }}>&gt;</span>
          </Box>
        </Wrapper>
      </Link>
    );
  }
}

// ListItem.propTypes = {
//   rule: PropTypes.object
// };

module.exports = ListItem;
