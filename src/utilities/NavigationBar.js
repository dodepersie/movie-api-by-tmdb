import { Navbar, Link, Switch, Text } from "@nextui-org/react";
import { Layout } from "./Layout";
import { SunIcon, MoonIcon, TicketIcon } from "./Icon";

const Navigation = ({ darkMode, toggleDarkMode }) => {
  const menuItems = [
    { menuName: "Home", link: "/" },
    { menuName: "Now Playing", link: "/now_playing" },
    { menuName: "Popular", link: "/popular" },
    { menuName: "Person", link: "/person" },
    { menuName: "Search", link: "/search" },
  ];

  return (
    <Layout>
      <Navbar variant="floating">
        <Navbar.Brand css={{ mr: "$5" }}>
          <Navbar.Toggle showIn="xs" css={{ mr: "$3" }} />
          <TicketIcon filled />
          <Text b color="inherit" hideIn="xs" css={{ m: "$5" }}>
            MoofliXXI
          </Text>
        </Navbar.Brand>

        <Navbar.Content
          activeColor="primary"
          hideIn="xs"
          variant="underline-rounded"
          css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}
          enableCursorHighlight
        >
          {menuItems.map(({ menuName, link }, index) => (
            <Navbar.Link
              href={link}
              isActive={window.location.pathname === link ? true : false}
              key={index}
            >
              {menuName}
            </Navbar.Link>
          ))}
        </Navbar.Content>

        <Navbar.Content
          css={{ "@xsMax": { w: "100%", jc: "space-between" } }}
        >
          <Navbar.Item
            css={{
              "@xsMax": { w: "100%", jc: "end" },
            }}
          >
            <Switch
              bordered
              size="xl"
              checked={darkMode.value}
              onChange={toggleDarkMode}
              iconOn={<SunIcon filled />}
              iconOff={<MoonIcon filled />}
            />
          </Navbar.Item>
        </Navbar.Content>

        <Navbar.Collapse showIn="xs" css={{ mt: ".5rem" }}>
          {menuItems.map(({ menuName, link }, index) => (
            <Navbar.CollapseItem
              key={index}
              activeColor="primary"
              isActive={window.location.pathname === link ? true : false}
            >
              <Link
                color="inherit"
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
