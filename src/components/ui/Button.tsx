import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    isLoading?: boolean;
}

// Button variants and sizes extracted for reusability
const buttonVariantsStyles = {
    variant: {
        primary: 'bg-primary text-primary-foreground hover:bg-blue-800 shadow-lg shadow-blue-500/30',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-amber-600 shadow-lg shadow-amber-500/30',
        outline: 'border-2 border-primary text-primary hover:bg-slate-50',
        ghost: 'hover:bg-slate-100 text-slate-700',
        link: 'text-primary underline-offset-4 hover:underline',
    },
    size: {
        sm: 'h-9 px-3 text-xs w-auto',
        md: 'h-11 px-6 py-2 w-auto',
        lg: 'h-14 px-8 text-lg w-auto',
        icon: 'h-10 w-10 p-2 flex items-center justify-center',
    }
};

interface ButtonVariantsProps {
    variant?: keyof typeof buttonVariantsStyles.variant;
    size?: keyof typeof buttonVariantsStyles.size;
    className?: string;
}

export function buttonVariants({ variant = 'primary', size = 'md', className }: ButtonVariantsProps) {
    return cn(
        'inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 active:scale-95',
        buttonVariantsStyles.variant[variant],
        buttonVariantsStyles.size[size],
        className
    );
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    children,
    disabled,
    ...props
}, ref) => {
    return (
        <button
            ref={ref}
            className={buttonVariants({ variant, size, className })}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {children}
        </button>
    );
});
Button.displayName = 'Button';

export { Button };
