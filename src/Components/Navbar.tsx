
import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/ui/ModeToggle"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Source Code Protocoin ERC-20",
    href: " https://github.com/FranciscoCosta/ProtoCoin",
    description:
      "Here you can find the source code of the ProtoCoin ERC-20.",
  },
  {
    title: "Faucet Code",
    href: "https://github.com/FranciscoCosta/Faucet-Protocoin",
    description:
      "Here you can find the source code of the ProtoCoin Faucet.",
  },
  {
    title: "Binance Testnet Faucet",
    href: "https://www.bnbchain.org/en/testnet-faucet",
    description:
      "The Binance Testnet is where ProtoCoin is based.",
  },
  {
    title: "Openzeppelin based ERC-20",
    href: "https://docs.openzeppelin.com/contracts/4.x/erc20",
    description: "OpenZeppelin Contracts is a library for secure smart contract development.",
  },
  {
    title: "Next js Documentation",
    href: "https://nextjs.org/docs",
    description:
      "The framework for building this website.",
  },
  {
    title: "Hardhat Documentation",
    href: "https://hardhat.org/",
    description:
      "Hardhat was used to deploy the smart contract to the Binance Testnet.",
  },
]

export function Navbar() {
  return (
    <div className="flex w-10/12 justify-between  m-auto mt-4">
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                  
                    <div className="mb-2 mt-4 text-lg font-medium">
                      ProtoCoin
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      The best faucet to get ProtoCoins for free! A max of 1.000 ProtoCoins can be claimed every day.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Faucet">
                Here you can claim your ProtoCoins.
              </ListItem>
              <ListItem href="https://github.com/FranciscoCosta/Faucet-Protocoin" title="Whats is ProtoCoin ?">
                ProtoCoin is a digital currency that can be claimed every day. Created for educational purposes.
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Binance Testnet">
                This is the blockchain where ProtoCoin is based.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={`https://testnet.bscscan.com/address/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}`} target="_blank" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Documentation
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <ModeToggle />
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
