import type { SafeString } from '@ember/template';
export default function <T extends string | SafeString>(stringFunction: (input: string) => T): (args: [string | SafeString | undefined | null]) => T;
//# sourceMappingURL=create-string-helper.d.ts.map