import { Loader2 } from 'lucide-react';
import React from 'react'
import { Button } from './ui/button';

interface LoadingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    loading: boolean;
}

export default function LoadingButton({
    children,
    loading,
    ...props
}: LoadingButtonProps) {
  return (
    <Button {...props} disabled={props.disabled || loading }>
        <span className=' flex items-center text-xl leading-[24px] text-white justify-center gap-1'>
            {loading && <Loader2 size={16}  className='animate-spin'/>}
            {children}
        </span>
    </Button>
  )
}
