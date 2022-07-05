import { Container, Switch } from "@nextui-org/react";
import { ILayout } from "@src/Types";
import { useTheme as useNextTheme } from "next-themes";
import { Fragment } from "react";
export const BaseLayout: React.FC<ILayout> = ({ children }) => {
  const { setTheme } = useNextTheme();

  return (
    <Fragment>
      <Container
        css={{
          minHeight: "100vh",
          backgroundColor: "$background",
        }}
      >
        <Switch
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
        {children}
      </Container>
    </Fragment>
  );
};
