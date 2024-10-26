'use client';

import React, { useRef, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Activity, Bookmark, ChevronLeft, LogOut, Menu, Moon, Settings, Sun } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { signOut } from 'next-auth/react';
import { DRAWER, useDrawer } from './SideBarProvider';

export const MoreOption = () => {
  const [showModeToggle, setShowModeToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();
  const { drawer } = useDrawer();
  const isOpenDrawer = drawer === 2 || drawer === 3 || drawer === 5;

  useEffect(() => {
    // Close the dropdown when the user clicks outside
    function handleOutsideClick(event: MouseEvent) {
      if (!event.target) return;
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowModeToggle(false);
        setOpen(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [ref]);

  return (
    <DropdownMenu open={open}>
      <DropdownMenuTrigger
        asChild
        className="!justify-start"
      >
        <Button
          onClick={() => setOpen(!open)}
          variant="ghost"
          className={cn("sidebar-link",{'w-12': isOpenDrawer})}
          size="lg"
        >
          <Menu />
          <div className={cn('hidden xl:pl-4 xl:block', { '!hidden xl:pl-0': isOpenDrawer })}>
            More
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        side="right"
        ref={ref}
        className={cn(
          'dark:bg-neutral-800 w-64 !rounded-xl !p-0 transition-opacity',
          !open && 'opacity-0',
        )}
        align="end"
        alignOffset={-40}
      >
        {!showModeToggle && (
          <>
            <DropdownMenuItem className="option-item">
              <Settings size={20} />
              <p>Settings</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="option-item">
              <Activity size={20} />
              <p>Your activity</p>
            </DropdownMenuItem>
            <DropdownMenuItem className="option-item">
              <Bookmark size={20} />
              <p>Saved</p>
            </DropdownMenuItem>

            <DropdownMenuItem
              className="option-item"
              onClick={() => setShowModeToggle(true)}
            >
              <Moon size={20} />
              <p>Switch appearance</p>
            </DropdownMenuItem>

            <DropdownMenuItem
              className="option-item"
              onClick={() => signOut()}
            >
              <LogOut size={20} />
              <p>Log out</p>
            </DropdownMenuItem>
          </>
        )}

        {showModeToggle && (
          <>
            <div className="flex items-center border-b border-gray-200 dark:border-neutral-700 py-3.5 px-2.5">
              <ChevronLeft
                size={18}
                onClick={() => setShowModeToggle(false)}
              />
              <p className="font-bold ml-1">Switch appearance</p>
              {theme === 'dark' ? (
                <Moon
                  size={20}
                  className="ml-auto"
                />
              ) : (
                <Sun
                  size={20}
                  className="ml-auto"
                />
              )}
            </div>

            <Label
              htmlFor="dark-mode"
              className="optionItem"
            >
              Dark Mode
              <DropdownMenuItem className="ml-auto !p-0">
                <Switch
                  id="dark-mode"
                  className="ml-auto"
                  checked={theme === 'dark'}
                  onCheckedChange={(checked) => {
                    setTheme(checked ? 'dark' : 'light');
                  }}
                />
              </DropdownMenuItem>
            </Label>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
