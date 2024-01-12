/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { useRouter } from "next/router";
import styles from "./SightsCard.module.scss";
import Link from "next/link";
import { PlayIcon } from "shared/Icons/Playback";
import PlayIconButton from "../../public/src/PlayIconButton.svg";
import * as HoverCard from '@radix-ui/react-hover-card';
import { Flex, IconButton, Text } from "@radix-ui/themes"
import * as Separator from '@radix-ui/react-separator';

const SightsCard = ({ cardData }) => {
  const [hovered, setHovered] = useState(false);
  const [number, setNumber] = useState();

  const router = useRouter();
  //Some videos lack images
  if (cardData?.portrait_image === null) {
    return null;
  }

  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <div className={styles.categoryCardWrapper}>
          <Link href={`/video/${cardData?.public_id}`}>
            <img
              src={`${process.env.NEXT_PUBLIC_API}/static/media/videos_images/${cardData?.portrait_image}`}
              alt={cardData?.title}
              className={styles.cardImage}
            />
          </Link>
          <div className={styles.innerContainer}>
            <div className={styles.movieTitle} style={{color: router.pathname !== "/" ? "white" : "black"}}>{cardData?.title.toUpperCase()}</div>
          </div>
        </div>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content className={styles.HoverCardContent} side="right" sideOffset={5} hideWhenDetached={true}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
              <div>
                <div className={styles.TextBold}>{cardData?.title}</div>
                <div className={styles.TextFaded}>{cardData?.creators_name}</div>
              </div>
              <div className={styles.Text}>
                {cardData?.description.slice(0, 600)}...
              </div>

              <Separator.Root className={styles.SeparatorRoot} style={{ margin: '15px 0' }} />

              <Link href={`/video/${cardData?.public_id}`}>
                <IconButton  tabIndex={-1} radius="full" size="3" style={{cursor: "pointer"}}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M3.24182 2.32181C3.3919 2.23132 3.5784 2.22601 3.73338 2.30781L12.7334 7.05781C12.8974 7.14436 13 7.31457 13 7.5C13 7.68543 12.8974 7.85564 12.7334 7.94219L3.73338 12.6922C3.5784 12.774 3.3919 12.7687 3.24182 12.6782C3.09175 12.5877 3 12.4252 3 12.25V2.75C3 2.57476 3.09175 2.4123 3.24182 2.32181ZM4 3.57925V11.4207L11.4288 7.5L4 3.57925Z" 
                      fill="currentColor" 
                      fillRule="evenodd" 
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <Text style={{ marginLeft: "16px" }}>Play Title</Text>
                </IconButton>
              </Link>

            </div>
          </div>

          <HoverCard.Arrow className={styles.HoverCardArrow} />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};

export default SightsCard;
