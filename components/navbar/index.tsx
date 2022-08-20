import {
  NavigationContainer,
  NavigationContentContainer,
  NavigationLinkList,
  NavigationLinkItem,
  NavigationButton,
  NavigationBlurredBackground,
  MobileNavContainer,
  MobileNavLogoArea,
  MobileProfileButton,
} from "./NavStyles";
import Link from "next/link";
import { LogoIcon } from "../icons";
import { HamburgerIcon } from "./HamburgerIcon";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

export const Navbar = () => {
  const [isNavbarShown, setIsNavbarShown] = useState(false);
  const router = useRouter();
  return (
    <NavigationContainer isWhite={router.pathname !== "/"}>
      <NavigationContentContainer>
        <Link href="/">
          <a>
            <LogoIcon />
          </a>
        </Link>

        <NavigationLinkList>
          <li>
            <Link href="/">
              <NavigationLinkItem isActive>Home</NavigationLinkItem>
            </Link>
          </li>
          <li>
            <Link href="/">
              <NavigationLinkItem>Reps</NavigationLinkItem>
            </Link>
          </li>
          <li>
            <Link href="/">
              <NavigationLinkItem>Courses</NavigationLinkItem>
            </Link>
          </li>
          <li>
            <Link href="/">
              <NavigationLinkItem>Gallery</NavigationLinkItem>
            </Link>
          </li>
          <li>
            <NavigationButton
              onClick={() => {
                router.push("/dashboard");
              }}
            >
              My Profile
            </NavigationButton>
          </li>
        </NavigationLinkList>
      </NavigationContentContainer>

      {/* 
        MOBILE NAVIGATION
       */}

      <HamburgerIcon onClick={() => setIsNavbarShown(true)} />

      <AnimatePresence>
        {isNavbarShown && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              right: 0,
              top: 0,
              zIndex: 100,
              width: "100%",
              height: "100%",
            }}
            transition={{ type: "linear", duration: 0.6 }}
          >
            <NavigationBlurredBackground
              onClick={() => setIsNavbarShown(false)}
            >
              <motion.div
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                style={{
                  position: "fixed",
                  right: 0,
                  top: 0,
                  zIndex: 100,
                  width: "100%",
                  height: "100%",
                }}
                transition={{ type: "linear", duration: 0.6 }}
              >
                <MobileNavContainer onClick={(evt) => evt.stopPropagation()}>
                  <MobileNavLogoArea>
                    <Link href="/">
                      <a>
                        <LogoIcon />
                      </a>
                    </Link>
                  </MobileNavLogoArea>

                  <MobileProfileButton>
                    <NavigationButton>My Profile</NavigationButton>
                  </MobileProfileButton>

                  <NavigationLinkList isMobile>
                    <li>
                      <Link href="/">
                        <NavigationLinkItem>Reps</NavigationLinkItem>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <NavigationLinkItem>Courses</NavigationLinkItem>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <NavigationLinkItem>Gallery</NavigationLinkItem>
                      </Link>
                    </li>
                  </NavigationLinkList>
                </MobileNavContainer>
              </motion.div>
            </NavigationBlurredBackground>
          </motion.div>
        )}
      </AnimatePresence>
    </NavigationContainer>
  );
};
