import { Navbar, Link, Switch, Text } from "@nextui-org/react";
import { Layout } from "./Layout";
import { SunIcon, MoonIcon, TicketIcon } from "./Icon";

const Navigation = ({ darkMode, toggleDarkMode }) => {
  const menuItems = [
    { menuName: "Home", link: "/" },
    { menuName: "Now Playing", link: "/now_playing" },
    { menuName: "Popular", link: "/popular" },
    { menuName: "Search", link: "/search" },
  ];

  return (
    <Layout>
      <Navbar isBordered variant="floating">
        <Navbar.Brand>
          <Navbar.Toggle showIn="xs" aria-label="toggle navigation" css={{ mr: 10 }} />
          <TicketIcon filled />
          <Text b color="inherit" hideIn="xs" css={{ ml: 5 }}>
            MoofliXXI
          </Text>
        </Navbar.Brand>

        <Navbar.Content
          activeColor="secondary"
          hideIn="xs"
          variant="underline"
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
        >
          {menuItems.map(({ menuName, link }) => (
            <Navbar.Link
              href={link}
              isActive={window.location.pathname === link ? true : false}
            >
              {menuName}
            </Navbar.Link>
          ))}
        </Navbar.Content>

        <Navbar.Content>
          <Switch
            bordered
            size="xl"
            checked={darkMode.value}
            onChange={toggleDarkMode}
            iconOn={<SunIcon filled />}
            iconOff={<MoonIcon filled />}
          />
        </Navbar.Content>

        <Navbar.Collapse>
          {menuItems.map(({ menuName, link }, index) => (
            <Navbar.CollapseItem
              key={index}
              activeColor="secondary"
              isActive={window.location.pathname === link ? true : false}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href={link}
              >
                {menuName}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
};

export default Navigation;
