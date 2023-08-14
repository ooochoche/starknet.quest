import { Tooltip } from "@mui/material";
import { useRouter } from "next/router";
import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import GithubIcon from "../../../UI/iconsComponents/icons/githubIcon";
import styles from "../../../../styles/components/icons.module.css";
import { minifyDomain } from "../../../../utils/stringService";
import VerifiedIcon from "../../../UI/iconsComponents/icons/verifiedIcon";
import { StarknetIdJsContext } from "../../../../context/StarknetIdJsProvider";

type ClickableGithubIconProps = {
  width: string;
  tokenId: string;
  isOwner: boolean;
  domain: string;
};

const ClickableGithubIcon: FunctionComponent<ClickableGithubIconProps> = ({
  width,
  tokenId,
  isOwner,
  domain,
}) => {
  const router = useRouter();
  const [githubId, setGithubId] = useState<string | undefined>();
  const [githubUsername, setGithubUsername] = useState<string | undefined>();
  const { starknetIdNavigator } = useContext(StarknetIdJsContext);

  useEffect(() => {
    starknetIdNavigator
      ?.getVerifierData(tokenId, "github")
      .then((response) => {
        if (response.toString(10) !== "0") {
          setGithubId(response.toString(10));
        } else {
          setGithubId(undefined);
          setGithubUsername(undefined);
        }
      })
      .catch(() => {
        return;
      });
  }, [tokenId, domain]);

  useEffect(() => {
    if (githubId) {
      fetch(`https://api.github.com/user/${githubId}`)
        .then((response) => response.json())
        // TO DO : Find how to import the github response type
        .then((data) => {
          setGithubUsername(data.login);
        });
    }
  }, [githubId]);

  function startVerification(link: string): void {
    sessionStorage.setItem("tokenId", tokenId);
    router.push(link);
  }

  return isOwner ? (
    <div className="mr-1">
      <Tooltip
        title={
          githubUsername
            ? "Change your github on starknet ID"
            : "Start github verification"
        }
        arrow
      >
        <div
          className={styles.clickableIconGithub}
          onClick={() =>
            startVerification(
              `${process.env.NEXT_PUBLIC_STARKNETID_APP_LINK}/identities`
            )
          }
        >
          {githubUsername ? (
            <div className={styles.verifiedIcon}>
              <VerifiedIcon width={"18"} color={"green"} />
            </div>
          ) : null}
          <GithubIcon width={width} color="#101012" />
        </div>
      </Tooltip>
    </div>
  ) : githubUsername ? (
    <div className="mr-1">
      <Tooltip title={`Check ${minifyDomain(domain)} github`} arrow>
        <div
          className={styles.clickableIconGithub}
          onClick={() => window.open(`https://github.com/${githubUsername}`)}
        >
          <div className={styles.verifiedIcon}>
            <VerifiedIcon width={"18"} color={"green"} />
          </div>
          <GithubIcon width={width} color="#101012" />
        </div>
      </Tooltip>
    </div>
  ) : null;
};

export default ClickableGithubIcon;
