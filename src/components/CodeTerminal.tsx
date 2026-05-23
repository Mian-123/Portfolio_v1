const CodeTerminal = () => {
  return (
    <div className="bg-[#161b27] rounded-[18px] p-[6px] border border-[rgba(255,255,255,0.08)] shadow-[0_0_0_1px_rgba(79,172,254,0.06),0_32px_80px_rgba(0,0,0,0.65),0_8px_24px_rgba(0,0,0,0.4)]">
      <div className="bg-[#0d1117] rounded-[13px] overflow-hidden border border-[rgba(255,255,255,0.05)]">
        {/* Title Bar */}
        <div className="flex items-center px-[18px] py-[14px] bg-[#161b22] border-b border-[rgba(255,255,255,0.06)] gap-2 relative">
          <span className="w-[13px] h-[13px] rounded-full bg-[#ff5f57]" />
          <span className="w-[13px] h-[13px] rounded-full bg-[#febc2e]" />
          <span className="w-[13px] h-[13px] rounded-full bg-[#28c840]" />
          <span className="absolute left-1/2 -translate-x-1/2 font-mono text-[0.75rem] text-[#6b7280] tracking-wide whitespace-nowrap">
            ~/waleed/profile.ts
          </span>
          <span className="ml-auto font-mono text-[0.78rem] text-[#6b7280] tracking-wider">
            &gt;_
          </span>
        </div>

        {/* Code Body */}
        <div className="px-6 py-[22px] font-mono text-[0.88rem] leading-[2.05] bg-[#0d1117]">
          <Line n="1"><span className="text-[#c792ea]">const</span> <span className="text-[#82aaff]">developer</span> <span className="text-[#cdd6f4]">= {'{'}</span></Line>
          <Line n="2">  <span className="text-[#89ddff]">name:</span> <span className="text-[#a8ff78]">"Muhammad Waleed"</span><span className="text-[#cdd6f4]">,</span></Line>
          <Line n="3">  <span className="text-[#89ddff]">role:</span> <span className="text-[#a8ff78]">"Full Stack Dev & AI Explorer"</span><span className="text-[#cdd6f4]">,</span></Line>
          <Line n="4">  <span className="text-[#89ddff]">stack:</span> <span className="text-[#ffcb6b]">[</span><span className="text-[#a8ff78]">"React"</span><span className="text-[#cdd6f4]">, </span><span className="text-[#a8ff78]">"Node"</span><span className="text-[#cdd6f4]">, </span><span className="text-[#a8ff78]">"MongoDB"</span><span className="text-[#ffcb6b]">]</span><span className="text-[#cdd6f4]">,</span></Line>
          <Line n="5">  <span className="text-[#89ddff]">ai:</span> <span className="text-[#ffcb6b]">[</span><span className="text-[#a8ff78]">"LLMs"</span><span className="text-[#cdd6f4]">, </span><span className="text-[#a8ff78]">"Agents"</span><span className="text-[#cdd6f4]">, </span><span className="text-[#a8ff78]">"Prompts"</span><span className="text-[#ffcb6b]">]</span><span className="text-[#cdd6f4]">,</span></Line>
          <Line n="6">  <span className="text-[#89ddff]">languages:</span> <span className="text-[#ffcb6b]">[</span><span className="text-[#a8ff78]">"JS"</span><span className="text-[#cdd6f4]">, </span><span className="text-[#a8ff78]">"TS"</span><span className="text-[#cdd6f4]">, </span><span className="text-[#a8ff78]">"Python"</span><span className="text-[#ffcb6b]">]</span><span className="text-[#cdd6f4]">,</span></Line>
          <Line n="7">  <span className="text-[#89ddff]">tools:</span> <span className="text-[#ffcb6b]">[</span><span className="text-[#a8ff78]">"Git"</span><span className="text-[#cdd6f4]">, </span><span className="text-[#a8ff78]">"Vercel"</span><span className="text-[#cdd6f4]">, </span><span className="text-[#a8ff78]">"Supabase"</span><span className="text-[#ffcb6b]">]</span><span className="text-[#cdd6f4]">,</span></Line>
          <Line n="8">  <span className="text-[#89ddff]">passion:</span> <span className="text-[#a8ff78]">"Building intelligent apps"</span><span className="text-[#cdd6f4]">,</span></Line>
          <Line n="9">  <span className="text-[#89ddff]">available:</span> <span className="text-[#f78c6c]">true</span><span className="text-[#cdd6f4]">,</span></Line>
          <Line n="10"><span className="text-[#cdd6f4]">{'}'}</span></Line>
          {/* Cursor line */}
          <div className="flex gap-5 items-baseline min-h-[1.8em]">
            <span className="text-[#374151] min-w-[16px] text-right select-none text-[0.83rem]">&nbsp;</span>
            <span className="inline-block w-[10px] h-[1.15em] bg-[#4facfe] rounded-sm animate-[blink_0.85s_step-end_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Line = ({ n, children }: { n: string; children: React.ReactNode }) => (
  <div className="flex gap-5 items-baseline min-h-[1.8em]">
    <span className="text-[#374151] min-w-[16px] text-right select-none shrink-0 text-[0.83rem]">{n}</span>
    <span>{children}</span>
  </div>
);

export default CodeTerminal;
