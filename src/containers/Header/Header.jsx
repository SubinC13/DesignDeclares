import { Grid, styled, Typography } from "@mui/material";
import "./Header.css";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import gsap from "gsap";

const Header = () => {
  const [showMainTitle, setShowMainTitle] = useState(false);
  const subTextRef = useRef(null);
  useEffect(() => {
    if (showMainTitle) {
      gsap.fromTo(
        ".animatedTitle",
        { backgroundSize: "100% 0%" },
        {
          backgroundSize: "100% 100%",
          duration: 0.2,
          ease: "power3.out",
          stagger: 0,
        }
      );
    }

    if (showMainTitle) {
      gsap.fromTo(
        subTextRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: subTextRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, [showMainTitle]);

  const Item = styled("div")(({ theme }) => ({}));
  return (
    <Grid container spacing={2} className="HeaderRoot">
      <Grid size={{ xs: 12, md: 7 }}>
        <Item>
          {!showMainTitle ? (
            <TypeAnimation
              className="HeaderTitleFont"
              sequence={["D", 1000, "D!", 500, () => setShowMainTitle(true)]}
              wrapper="span"
              cursor={false}
            />
          ) : (
            <>
              <Typography
                variant="h1"
                className="HeaderTitleFont reveal-text animatedTitle"
              >
                Design
              </Typography>
              <br />
              <Typography
                variant="h1"
                className="HeaderTitleFont reveal-text animatedTitle"
              >
                Declares
              </Typography>
              <br />
              <Typography
                variant="h1"
                className="HeaderTitleFont HeaderSpan animatedTitle"
              >
                UK
              </Typography>
            </>
          )}
        </Item>
      </Grid>
      <Grid size={{ xs: 12, md: 5 }}>
        <Item>
          {showMainTitle && (
            <Typography
              variant="body1"
              className="HeaderSubText"
              ref={subTextRef}
            >
              Design Declares is a growing group of designers, design studios,
              agencies and institutions here to declare a climate and ecological
              emergency. As part of the global declaration movement, we commit
              to harnessing the tools of our industry to reimagine, rebuild and
              heal our world.
            </Typography>
          )}
        </Item>
      </Grid>
    </Grid>
  );
};

export default Header;
