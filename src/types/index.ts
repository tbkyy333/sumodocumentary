export interface Member {
  id: string;
  shikona: string;         // 四股名
  rank: string;            // 番付
  rankEnglish: string;
  hometown: string;        // 出身地
  hometownEnglish: string;
  image: string;
  isOyakata?: boolean;     // 親方フラグ
  oyakataName?: string;    // 親方名
  bio?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  category: string;
}

export interface HistoryEvent {
  id: string;
  year: number;
  title: string;
  description: string;
  isHighlight?: boolean;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  roleEnglish: string;
}
