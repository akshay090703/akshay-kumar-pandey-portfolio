'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import * as React from 'react';
import { Form, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { LoadingButton } from './ui/LoadingButton';
import { FloatingLabelInput } from './ui/FloatingInput';
import { toast } from 'sonner';
import { FloatingLabelTextarea } from './ui/floating-textarea';
import { sendMail } from '@/lib/send-email';

const FormSchema = z.object({
    subject: z.string().min(2, {
        message: 'subject must be at least 2 characters.',
    }),
    message: z.string().min(2, {
        message: 'name must be at least 2 characters.',
    }),
    email: z.string().email({
        message: 'Please enter a valid email address.',
    }),
});

const EmailForm = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        defaultValues: { subject: '', message: '', email: '' },
        resolver: zodResolver(FormSchema),
        mode: 'onTouched',
    });

    const [loading, setLoading] = React.useState(false);

    async function onSubmit(values: z.infer<typeof FormSchema>) {
        try {
            setLoading(true);

            const mailText = `Sent From: ${values.email}\n \nMessage: ${values.message}`;
            const response = await sendMail({
                from: values.email,
                subject: values.subject,
                text: mailText,
            });

            toast.success('Email Sent Successfully.');
            form.reset()
        } catch (error) {
            console.error(error)
            toast.error('Failed To send the email.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FloatingLabelInput {...field} id="email" label="email" type='email' />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                        <FormItem>
                            <FloatingLabelInput {...field} id="subject" label="subject" />
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FloatingLabelTextarea {...field} id="message" label="message" />
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <LoadingButton loading={loading} type="submit" className='w-full'>
                    Send Email
                </LoadingButton>
            </form>
        </Form>
    );
};
export default EmailForm;
