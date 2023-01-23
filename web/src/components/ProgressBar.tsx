interface ProgressBarProps {
   progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
   return (
      <div className="h-3 w-full mt-4 rounded-xl bg-zinc-700 overflow-hidden ">
         <div
            role="progressbar"
            aria-label="Progresso de hábitos completados nesse dia"
            aria-valuenow={progress}
            className="h-3 rounded-xl bg-violet-600 w-3/4 transition-all"
            style={{
               width: `${progress}%`,
            }}
         />
      </div>
   );
}