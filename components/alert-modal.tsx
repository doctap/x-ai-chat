'use client';

import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from './ui/alert-dialog';

export function AlertModal({
  description,
  isShow: open,
  onConfirm,
  title,
  onBack,
}: AlertModalProps) {
  const [isShow, setIsShow] = useState(open);

  return createPortal(
    <AlertDialog open={isShow} onOpenChange={setIsShow}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="justify-between">
          <AlertDialogCancel onClick={onBack}>Back</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Pay Now</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>,
    document.body,
  );
}

export interface AlertModalProps {
  title: string;
  isShow: boolean;
  description: string;
  onConfirm: () => void;
  onBack?: () => void;
}
