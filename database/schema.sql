-- Banco público de respostas anônimas para o mural de estudo.
-- Execute no SQL Editor do seu projeto Supabase.
create table if not exists public.study_answers (
  id uuid primary key default gen_random_uuid(),
  topic_title text not null check (char_length(topic_title) between 1 and 200),
  answer text not null check (char_length(answer) between 40 and 6000),
  created_at timestamptz not null default now()
);

alter table public.study_answers enable row level security;

drop policy if exists "Anyone can read study answers" on public.study_answers;
create policy "Anyone can read study answers"
  on public.study_answers for select to anon using (true);

drop policy if exists "Anyone can contribute study answers" on public.study_answers;
create policy "Anyone can contribute study answers"
  on public.study_answers for insert to anon with check (
    char_length(topic_title) between 1 and 200
    and char_length(answer) between 40 and 6000
  );

grant select, insert on public.study_answers to anon;
